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
    slug: z.string(),
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
                const ratingMatch = ratingElement?.outerHTML.match(/\d+/gm);
                console.log({ ratingMatch });
                const rating = ratingMatch ? ratingMatch[0] : "00";


                const parsedProduct = ProductSchema.parse({
                    id: element.getAttribute("data-id") || "",
                    link: linkElement?.getAttribute("href") || "",
                    slug: linkElement?.getAttribute("href")?.split("/").pop()?.replace(/\?.*/gm, "") || "",
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
                    slug: elem.querySelector("a")?.getAttribute("href")?.split("/").pop()?.replace(/\?.*/gm, "") || "",
                }
            })

            return {
                link: link || "",
                image: image || "",
                name: name?.trim() || "",
                slug: link?.split("/").pop()?.replace(/\?.*/gm, "") || "",
                subCollections
            }
        })


        return { categories }
    } else {
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




