import { assert } from "https://deno.land/std@0.200.0/assert/assert.ts";
import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const ProductSchema = z.object({
    link: z.string(),
    name: z.string(),
    image: z.string().url(),
    currency: z.string(),
    price: z.number().min(2),
    discountedPrice: z.number().min(2).nullable().optional(),
    rating: z.string(),
    numberOfReviews: z.number().optional(),
})

export function getProductsFromHtml(html: string) {
    const document = new DOMParser().parseFromString(html, "text/html")

    if (document) {
        const productElements = document?.querySelectorAll(".site-product") as Iterable<Element>
        const products = [...productElements].map(element => {
            const linkElement = element.querySelector("a")
            const nameElement = element.querySelector("h3")?.querySelector("span")
            const imageElement = element.querySelector("img")
            const pricesElements = element.querySelectorAll(".format_price")
            assert(pricesElements, "Prices Not found")
            const ratingElement = element.querySelector(".active-bg")
            const numberOfReviewsElement = element.querySelector(".review-number")

            // The first letters before the numbers, of pricesElements[1]?.textContent are the currency
            const currencyRegex = /[A-Z]{3}/

            let price = ""
            let discountedPrice = ""

            if (pricesElements.length === 1) {
                discountedPrice = pricesElements[0]?.textContent.replace(currencyRegex, "").replaceAll(",", "") || ""
            } else {
                price = pricesElements[1]?.textContent.replace(currencyRegex, "").replaceAll(",", "") || ""
                discountedPrice = pricesElements[0]?.textContent.replace(currencyRegex, "").replaceAll(",", "") || ""
            }

            console.log({
                link: linkElement?.getAttribute("href") || "",
                name: nameElement?.textContent.trim() || "",
                image: imageElement?.getAttribute("src") || "",
                currency: currencyRegex.exec(pricesElements[1]?.textContent || "")?.toString() || "",
                price: parseInt(price),
                discountedPrice: discountedPrice ? parseInt(discountedPrice) : null,
                rating: ratingElement?.outerHTML.match(/\d\d/gm)![0] || "00",
                numberOfReviews: parseInt(numberOfReviewsElement?.textContent.replace(/\(|\)/gm, "") || "0"),
            });


            try {
                const parsedProduct = ProductSchema.parse({
                    link: linkElement?.getAttribute("href") || "",
                    name: nameElement?.textContent.trim() || "",
                    image: imageElement?.getAttribute("src") || "",
                    currency: currencyRegex.exec(pricesElements[1]?.textContent || "")?.toString() || "",
                    price: parseInt(price),
                    discountedPrice: discountedPrice ? parseInt(discountedPrice) : null,
                    rating: ratingElement?.outerHTML.replace(/\d\d/gm, "") || "00",
                    numberOfReviews: parseInt(numberOfReviewsElement?.textContent.replace(/\(|\)/gm, "") || "0"),
                })

                return parsedProduct
            } catch (error) {
                console.log(error);
                return null
            }
        })

        const properProducts = products.filter(product => product !== null)

        return { products: properProducts }
    } else {
        return { error: "Failed to create document" }
    }

}


export function getCategoriesFromHtml(html: string) {
    const document = new DOMParser().parseFromString(html, "text/html")

    if (document) {
        const mainCategoryElements = document?.getElementsByClassName("level1 level-2 category-item") as Iterable<Element>
        const categories = [...mainCategoryElements].map(element => {
            const name = element.querySelector("a")?.querySelectorAll("span")[1]
            const image = element.querySelector("img")
            const link = element.querySelector("a")

            const subCategoryElements = element.getElementsByClassName("level2");

            console.log("subCategoryElements length:" + subCategoryElements.length);

            const subCategories = [...subCategoryElements].map(elem => {
                const subCatName = elem.querySelector("a")?.querySelector("span")?.textContent || ""
                return {
                    link: elem.querySelector("a")?.getAttribute("href") || "",
                    name: subCatName,
                    slug: subCatName.replace(" ", "-").toLowerCase()
                }
            })

            console.log({ subCategories });


            return {
                link: link?.getAttribute("href") || "",
                image: image?.getAttribute("src") || "",
                name: name?.textContent.trim() || "",
                slug: (name?.textContent.trim() || "").toLowerCase(),
                subCategories
            }
        })


        return { categories }
    } else {
        return { error: "Failed to create document" }
    }

}



export function getProductDetail(html: string) {
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


export async function getProductReviews(html: string) {
    try {
        const document = new DOMParser().parseFromString(html, "text/html")

        if (document) {
            const reviewElements = document?.querySelectorAll(".item.review-item") as Iterable<Element>
            const reviews = [...reviewElements].map(element => {
                const reviewTitleElement = element.querySelector(".review-title")
                const reviewContentElement = element.querySelector(".review-content")
                const reviewAuthorElement = element.querySelector(".review-details-value")
                const reviewRatingElement = element.querySelector(".rating-result")


                return {
                    title: reviewTitleElement?.textContent.trim() || "",
                    content: reviewContentElement?.textContent.trim() || "",
                    author: reviewAuthorElement?.textContent.trim() || "",
                    rating: reviewRatingElement?.getAttribute("title") || "0.0",
                }
            })

            return { reviews }
        } else {
            return { error: "Failed to create document" }
        }
    } catch (error) {
        return { error: "Failed to get reviews" }
    }
}




