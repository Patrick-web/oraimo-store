import { assert } from "https://deno.land/std@0.210.0/assert/assert.ts";
import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import z from "https://deno.land/x/zod@v3.22.4/index.ts";

const ProductDetailsSchema = z.object({
    productID: z.string(),
    variantID: z.string(),
    currency: z.string(),
    tags: z.string(),
    price: z.number(),
    oldPrice: z.number(),
    title: z.string(),
    imageUrl: z.string().url(),
    productUrl: z.string().url(),
    vendor: z.string(),
})

const ProductImageSchema = z.object({
    url: z.string().url(),
    height: z.number().positive(),
    width: z.number().positive(),
    resized_width: z.number().positive(),
    resized_height: z.number().positive(),
    label: z.string(),
    code: z.string().optional(),
})

export function getProductDetail(html: string): { product: z.infer<typeof ProductDetailsSchema> } | { error: string } {
    try {
        const document = new DOMParser().parseFromString(html, "text/html")

        if (document) {
            const productInfoScriptTag = document.querySelector("#omnisend-product-viewed");
            // Get the product details script tag html
            const productInfoScriptTagHtml = productInfoScriptTag?.outerHTML || "";
            // Regex to get the product details
            const infoAreaRegex = /\*":\s{([^}]*)}/;
            // Get the product details
            const infoArea = infoAreaRegex.exec(productInfoScriptTagHtml);
            if (!infoArea) {
                throw new Error("Product details not found.");
            }
            const infoAreaJson = infoArea[0].replace(`*": {`, "");
            // Regex to get the json data
            const infoRegex = /{([^}]*)}/;
            // Get the json data
            const data = infoRegex.exec(infoAreaJson);
            if (!data) {
                throw new Error("Product details data not found.");
            }
            // Get the json data which is the first element in the array
            const dat_ = data[0];
            // Remove all new lines and spaces
            const detailsString = dat_.replace(/^\s*|\n/gm, "").toString();
            // Parse the json string to an object
            const details = JSON.parse(detailsString);
            // Validate the object
            const validatedDetails = ProductDetailsSchema.parse(details);


            // Get Product Images
            const pageHtml = document.querySelector("body")?.outerHTML || "";
            // Regex to get the product images
            const regex = /\{"url([^}]*)\}/gm
            const results = pageHtml.match(regex);
            const thumbnailImages: z.infer<typeof ProductImageSchema>[] = []
            results?.forEach((res) => {
                try {
                    const data = JSON.parse(res);
                    const image = ProductImageSchema.parse(data);
                    thumbnailImages.push(image);
                } catch (error) {
                    // console.log(error);
                    // Just skip invalid data
                }
            })
            const fullScaleImages = thumbnailImages.map(image => ({ ...image, url: image.url.replace(/cache\/(.*)\//gm, "") }));

            // array of images with their thumbnails
            const images = fullScaleImages.map(image => ({
                fullScale: image,
                thumbnail: thumbnailImages.find(thumb => thumb.code === image.code)
            }))


            // Get Reviews Details
            const reviewsCountRegex = /item_reviews_count":"\d*"/gm
            let reviewsCount = reviewsCountRegex.exec(pageHtml)?.toString().replace(/item_reviews_count":"|"/gm, "") || "0"
            const reviewRatingRegex = /item_reviews_score":"\d\.\d"/gm
            const reviewRating = reviewRatingRegex.exec(pageHtml)?.toString().replace(/item_reviews_score":"|"/gm, "") || "0"



            // Get Product Description
            const descriptionElement = document.querySelector(".product.attribute.description") as Element;
            assert(descriptionElement);
            const valueElement = descriptionElement.querySelector(".value");
            assert(valueElement);
            const pTags = [...valueElement!.querySelectorAll("p")] as Element[];
            const productDescription: Record<string, string>[] = []
            pTags?.forEach((pTag) => {
                if (pTag.querySelector("img")) {
                    const img = pTag.querySelector("img") as Element;
                    if (img && img.getAttribute("src")) {
                        productDescription.push({
                            type: "image",
                            src: img.getAttribute("src") as string
                        })
                    }
                } else if (pTag.querySelector("strong")) {
                    const strong = pTag.querySelector("strong") as Element;
                    productDescription.push({
                        type: "text",
                        text: strong.textContent
                    })
                }
            }
            );

            return {
                product: {
                    ...validatedDetails,
                    images,
                    rating: reviewRating,
                    numberOfReviews: reviewsCount,
                    description: productDescription
                }
            }

        } else {
            return { error: "Failed to create document" }

        }
    } catch (error) {
        return { error: "Failed to create document" }
    }
}
