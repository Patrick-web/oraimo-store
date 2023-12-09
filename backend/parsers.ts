import { assert } from "https://deno.land/std@0.200.0/assert/assert.ts";
import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";

export function getProductsFromHtml(html: string) {
    const document = new DOMParser().parseFromString(html, "text/html")

    if (document) {
        const productElements = document?.querySelectorAll(".product-item-info") as Iterable<Element>
        const products = [...productElements].map(element => {
            const linkElement = element.querySelector("a")
            const nameElement = element.querySelector("strong")?.querySelector("a")
            const imageElement = element.querySelector("img")
            const pricesElements = element.querySelectorAll(".price")
            assert(pricesElements, "Prices Not found")
            const ratingElement = element.querySelector(".rating-result")?.querySelector("span")?.querySelector("span")
            const numberOfReviewsElement = element.querySelector(".reviews-actions")?.querySelector("a")
            const reviewsLinkElement = element.querySelector(".reviews-actions")?.querySelector("a")


            return {
                link: linkElement?.getAttribute("href") || "",
                name: nameElement?.textContent.trim() || "",
                image: imageElement?.getAttribute("src") || "",
                initialPrice: pricesElements[1]?.textContent || 0,
                discountedPrice: pricesElements[0]?.textContent || "",
                rating: ratingElement?.textContent || "0%",
                numberOfReviews: numberOfReviewsElement?.textContent.replace(/\D/g, "") || "0",
                reviewsLink: reviewsLinkElement?.getAttribute("href") || ""
            }
        })

        const properProducts = products.filter(product => product.link && product.image && product.name)

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

