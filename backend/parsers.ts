import { assert } from "https://deno.land/std@0.200.0/assert/assert.ts";
import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


export function getMainCollections(html: string) {
    const document = new DOMParser().parseFromString(html, "text/html")

    if (document) {
        const mainCollectionElements = [...document.querySelectorAll(".component > a")] as Element[]
        const mainCollections = mainCollectionElements.map(element => {
            const name = element.querySelector("span")?.textContent?.trim() || ""
            const image = element.querySelector("img")?.getAttribute("data-src") || element.outerHTML
            const link = element.getAttribute("href") || ""
            return {
                name,
                image,
                link,
            }
        })
        return { mainCollections: mainCollections.filter(collection => collection.name && collection.image && collection.link) }
    }
    return { error: "Failed to create document" }
}

const ProductSchema = z.object({
    id: z.string(),
    link: z.string(),
    name: z.string(),
    image: z.string().url(),
    currency: z.string(),
    price: z.number().min(2),
    discountedPrice: z.number().min(2).nullable().optional(),
    rating: z.number().min(0).max(5),
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


            try {
                const ratingMatch = ratingElement?.outerHTML.match(/\d\d/gm);
                const rating = ratingMatch ? ratingMatch[0] : "00";

                const parsedProduct = ProductSchema.parse({
                    id: element.getAttribute("data-id") || "",
                    link: linkElement?.getAttribute("href") || "",
                    name: nameElement?.textContent.trim() || "",
                    image: imageElement?.getAttribute("data-src") || "",
                    currency: currencyRegex.exec(pricesElements[1]?.textContent || "")?.toString() || "",
                    price: parseInt(price),
                    discountedPrice: discountedPrice ? parseInt(discountedPrice) : null,
                    rating: parseInt(rating) * 5 / 100,
                    numberOfReviews: parseInt(numberOfReviewsElement?.textContent.replace(/\(|\)/gm, "") || "0"),
                })

                return parsedProduct
            } catch (error) {
                console.log(error);
                return null
            }
        })

        const properProducts = products.filter(product => product !== null) as z.infer<typeof ProductSchema>[]

        return { products: properProducts }
    } else {
        return { error: "Failed to create document" }
    }

}


export function getCollectionsFromHtml(html: string) {
    const document = new DOMParser().parseFromString(html, "text/html")

    if (document) {
        const mainCategoryElements = document?.querySelectorAll(".header-nav-sub>li") as Iterable<Element>
        const categories = [...mainCategoryElements].map(element => {
            const name = element.querySelector(".suber")?.textContent
            const image = element.querySelector(".header-nav-image>img")?.getAttribute("src")
            const link = element.querySelector(".suber")?.getAttribute("href")
            // #header > div.header-main > div.header-content > div.header-category-container > nav > ul > li:nth-child(3) > div > ul > li:nth-child(1) > ul > li:nth-child(2)
            const subCategoryElements = element.querySelectorAll(".header-nav-suber>li") as Iterable<Element>;

            const subCollections = [...subCategoryElements].map(elem => {
                const subCatName = elem.querySelector("a")?.textContent || ""
                return {
                    link: elem.querySelector("a")?.getAttribute("href") || "",
                    name: subCatName.replace(/\n[\s\S]*/g, "").trim() || "",
                }
            })

            return {
                link: link || "",
                image: image || "",
                name: name?.trim() || "",
                slug: name || "",
                subCollections
            }
        })


        return { categories }
    } else {
        return { error: "Failed to create document" }
    }

}


const ProductDetailsSchema = z.object({
    name: z.string(),
    price: z.string(),
    discountedPrice: z.string().optional(),
    highlightFeatures: z.array(z.object({
        image: z.string().url(),
        label: z.string(),
    })),
    images: z.array(z.string().url()),
    parameters: z.array(z.object({
        label: z.string(),
        value: z.string(),
    })),
    // features is an array of objects with type image or text and src or text. If type is image, src is required. If type is text, text is required
    description: z.array(z.object({
        type: z.enum(["image", "text"]),
        src: z.string().url().optional(),
        text: z.string().optional(),
        weight: z.string().optional(),
    })),
    numberOfReviews: z.string(),
    overallRating: z.string(),
    ratingsSummary: z.array(z.object({
        rating: z.string(),
        numberOfReviews: z.string(),
    })),
    firstReviews: z.array(z.object({
        title: z.string(),
        content: z.string(),
        user: z.string(),
        rating: z.string(),
        date: z.string(),
    })),
    isSoldOut: z.boolean(),
})


// : { product: z.infer<typeof ProductDetailsSchema> } | { error: string } 

export function getProductDetail(html: string) {
    try {
        const document = new DOMParser().parseFromString(html, "text/html")

        if (!document) throw new Error("Failed to create document")

        const nameElement = document?.querySelector(".goods-title")
        const name = nameElement?.textContent?.trim() || ""

        const reviewElement = document?.querySelector(".review-box")
        const ratingElement = document.querySelector("span.total-left")

        const priceElement = document?.querySelector("#market_price")
        const discountPriceElement = document?.querySelector("#final_price")

        const highlightFeaturesWrapperElement = document.querySelector(".goods-desc")
        const highlightFeaturesElements = highlightFeaturesWrapperElement?.querySelectorAll("p") as Iterable<Element>

        const highlightFeatures: {
            label: string,
            image: string,
        }[] = [];
        [...highlightFeaturesElements].forEach(element => {
            const imageElement = element.querySelector("img")
            const textElement = element.querySelector("span")
            if (imageElement && textElement) {
                highlightFeatures.push({
                    label: textElement?.textContent?.trim() || textElement.outerHTML,
                    image: imageElement.getAttribute("src") || imageElement.outerHTML,
                })
            }
        })

        const currencyRegex = /[A-Z]{3}/

        let price = priceElement?.getAttribute("value") || ""
        let discountedPrice = discountPriceElement?.getAttribute("value") || ""


        const imagesElements = document.querySelector(".goods-swiper")?.querySelectorAll("img") as Iterable<Element>
        const images = [...imagesElements].map(element => element.getAttribute("src") || "")

        // Get Product Description
        const descriptionElement = document.querySelector(".goods-description-content") as Element;
        assert(descriptionElement, "Description Element not found");
        const pTags = [...descriptionElement!.querySelectorAll("p")] as Element[];
        let productDescription: {
            type: "image" | "text" | "youtube",
            src?: string,
            text?: string,
            weight?: string,
        }[] = []
        pTags?.forEach((pTag) => {
            if (pTag.querySelector("img")) {
                const img = pTag.querySelector("img") as Element;
                if (img && img.getAttribute("data-src")) {
                    productDescription.push({
                        type: "image",
                        src: img.getAttribute("data-src") as string
                    })
                }
            } else if (pTag.querySelector("iframe")) {
                const iframe = pTag.querySelector("iframe") as Element;
                if (iframe && iframe.getAttribute("src")) {
                    productDescription.push({
                        type: "youtube",
                        src: iframe.getAttribute("src") as string
                    })
                }
            } else {
                const strongElements = [...pTag.querySelectorAll("strong") as Iterable<Element>];


                if (strongElements && strongElements.length > 0) {
                    strongElements.forEach((strongElement) => {
                        const strongText = strongElement.textContent?.trim() || "";
                        if (strongText) {
                            productDescription.push({
                                type: "text",
                                text: strongText.trim(),
                                weight: "bold",
                            })
                        }
                    })
                }
                const extraText = pTag.textContent?.trim()
                if (extraText) {
                    productDescription.push({
                        type: "text",
                        text: extraText.replace(/^.*-/gm, "").trim(),
                        weight: "normal",
                    })
                }
            }
        }
        );


        const descriptionStartIndex = productDescription.findLastIndex((description) => description.type === "text" && description.text?.includes("Product Features"));
        if (descriptionStartIndex !== -1) {
            productDescription = productDescription.slice(descriptionStartIndex + 1);
        }

        const parameters = pTags[1].outerHTML.replace("<p>", "").replace("</p>", "").split("<br>")?.map((text) => {
            let split = text.split(":")
            if (split.length === 1) {
                // This is a freaking random edge case. But what the heck, this whole project is a random edge case
                split = text.split("：")
            }
            const label = split[0] || ""
            const value = split[1] || ""
            return { label: label.trim(), value: value.trim() }
        }
        );

        const ratingsSummaryElement = document.querySelector(".overall-rating2") as Element;
        const ratingsSummary = [...ratingsSummaryElement.querySelectorAll("p") as Iterable<Element>].map((p, index) => {
            const rating = `${5 - index}.0`
            const numberOfReviews = p.textContent?.trim() || "0"
            return { rating, numberOfReviews }
        }
        );

        let firstReviews = [...document.querySelectorAll(".review-item") as Iterable<Element>].map((reviewElement) => {
            const reviewTitleElement = reviewElement.querySelector(".review-title")
            const reviewContentElement = reviewElement.querySelector(".review-desc")
            const reviewAuthorElement = reviewElement.querySelector(".review-author>span")
            const reviewRatingElement = reviewElement.querySelector(".review-star>span")
            const reviewDateElement = reviewElement.querySelector(".review-date")

            return {
                title: reviewTitleElement?.textContent?.trim() || "",
                content: reviewContentElement?.textContent?.trim() || "",
                user: reviewAuthorElement?.textContent?.trim() || "",
                rating: reviewRatingElement?.getAttribute("title") || "0.0",
                date: reviewDateElement?.textContent?.trim() || "",
            }
        });

        // the first review is a template string. Remove it
        firstReviews.shift()

        // <button type="button" class="soldout-btn" style = "display: none;" > Sold Out < /button>

        const soldOutButton = document.querySelector(".soldout-btn") as Element;
        const isSoldOut = soldOutButton?.getAttribute("style")?.includes("display: none") || false;

        return {
            product: {
                name: name.replace("oraimo", "").trim(),
                price,
                discountedPrice,
                highlightFeatures,
                images,
                parameters,
                description: productDescription,
                numberOfReviews: reviewElement?.querySelector("i")?.textContent?.match(/\d+/gm)?.[0] || "",
                overallRating: ratingElement?.textContent?.match(/\d\.\d/gm)?.[0] || "",
                ratingsSummary,
                firstReviews,
                isSoldOut,
            }
        }

    } catch (error) {
        return { error: error.message }
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




