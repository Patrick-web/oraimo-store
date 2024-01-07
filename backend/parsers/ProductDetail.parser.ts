import { assert } from "https://deno.land/std@0.200.0/assert/assert.ts";
import { DOMParser, Element, HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import z from "https://deno.land/x/zod@v3.22.4/index.ts";

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

export default function getProductDetail(html: string) {
    try {
        const document = new DOMParser().parseFromString(html, "text/html")

        if (!document) throw new Error("Failed to create document")

        const nameElement = document?.querySelector(".goods-title")
        const name = nameElement?.textContent?.trim() || ""

        const reviewElement = document?.querySelector(".review-box")
        const ratingElement = document.querySelector("span.total-left")

        const priceElement = document?.querySelector("#market_price")
        const discountPriceElement = document?.querySelector("#final_price")

        const highlightFeatures = getHighlightFeatures(document);

        const currencyRegex = /[A-Z]{3}/

        let price = priceElement?.getAttribute("value") || ""
        let discountedPrice = discountPriceElement?.getAttribute("value") || ""


        const imagesElements = document.querySelector(".goods-swiper")?.querySelectorAll("img") as Iterable<Element>
        const images = [...imagesElements].map(element => element.getAttribute("src") || "")

        // Get Product Description
        const productDescription = getDescription(document);

        const parameters = getParameters(document)

        const ratingsSummary = getRatingSummary(document);

        const firstReviews = getReviews(document);

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

function getParameters(document: HTMLDocument) {
    const descriptionElement = document.querySelector(".goods-description-content") as Element;
    assert(descriptionElement, "Description Element not found");

    /* 
    <table border="1" style="border-collapse: collapse; width: 99.7429%;"><tbody><tr><td style="width: 48.1938%; text-align: left;">Size</td> <td style="width: 48.1938%;">166.7mm*45.2mm*33.5mm</td></tr> <tr><td style="width: 48.1938%;">Material</td> <td style="width: 48.1938%;">Aluminum alloy+stainless steel</td></tr> <tr><td style="width: 48.1938%;">Battery Capacity</td> <td style="width: 48.1938%;">18650 3.7V/1200mAh</td></tr> <tr><td style="width: 48.1938%;">Charging</td> <td style="width: 48.1938%;">DC 5V 2A，Anifast</td></tr> <tr><td style="width: 48.1938%;">Vibrate</td> <td style="width: 48.1938%;">280 3.0V ;6500RPM</td></tr> <tr><td style="width: 48.1938%;">Moving knife adjustment</td> <td style="width: 48.1938%;">0.1-2.0mm</td></tr> <tr><td style="width: 48.1938%;">Limiting comb</td> <td style="width: 48.1938%;">3、6、9、12mm</td></tr> <tr><td style="width: 48.1938%;">Model</td> <td style="width: 48.1938%;">OCL-210</td></tr></tbody></table>
    */

    // Check whether the parameters are in a table
    const table = descriptionElement.querySelector("table") as Element;
    if (table) {
        const tableRows = [...table.querySelectorAll("tr")] as Element[];
        const parameters = tableRows.map((tableRow) => {
            const tableData = [...tableRow.querySelectorAll("td")] as Element[];
            const label = tableData[0].textContent?.trim() || "";
            const value = tableData[1].textContent?.trim() || "";
            return { label, value }
        })
        return parameters
    }



    const pTags = [...descriptionElement!.querySelectorAll("p")] as Element[];

    let parameters: {
        label: string,
        value: string,
    }[] = []
    const spans = [...pTags[1].querySelectorAll("span")] as Element[];
    console.log({ length: spans.length });
    if (spans.length > 0) {
        spans.forEach((span) => {
            const text = span.textContent?.trim() || "";
            console.log(text);
            if (text) {
                const split = text.split(":");
                const label = split[0] || "";
                const value = split[1] || "";
                parameters.push({
                    label: label.trim(),
                    value: value.trim(),
                })
            }
        })
    } else {
        parameters = pTags[1].outerHTML.replace("<p>", "").replace("</p>", "").split("<br>")?.map((text) => {
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
        // remove all html tags from the parameters
        parameters = parameters.map((parameter) => {
            return {
                label: parameter.label.replace(/<[^>]+>/gm, ''),
                value: parameter.value.replace(/<[^>]+>/gm, ''),
            }
        })
        // remove all empty parameters
        parameters = parameters.filter((parameter) => parameter.label !== "" && parameter.value !== "");
    }
    return parameters
}

function getReviews(document: HTMLDocument) {
    let firstReviews = [...document.querySelectorAll(".review-item") as Iterable<Element>].map((reviewElement) => {
        const reviewTitleElement = reviewElement.querySelector(".review-title")
        const reviewContentElement = reviewElement.querySelector(".review-desc")
        const reviewAuthorElement = reviewElement.querySelector(".review-author>span")
        const reviewRatingElement = reviewElement.querySelector(".review-star")?.querySelector(".active-bg")
        const reviewDateElement = reviewElement.querySelector(".review-date")

        console.log(reviewRatingElement?.outerHTML);

        const ratingMatch = reviewRatingElement?.outerHTML.match(/\d+/gm);
        const rating = ratingMatch ? ratingMatch[0] : "00";

        console.log({ rating });


        return {
            title: reviewTitleElement?.textContent?.trim() || "",
            content: reviewContentElement?.textContent?.trim() || "",
            user: reviewAuthorElement?.textContent?.trim() || "",
            rating: Number(rating) * 5 / 100 || 0.0,
            date: reviewDateElement?.textContent?.trim() || "",
        }
    });

    // the first review is a template string. Remove it
    firstReviews.shift()
    return firstReviews
}


function getRatingSummary(document: HTMLDocument) {
    const ratingSummaryElement = document.querySelector(".overall-rating2") as Element;
    const ratingSummary = [...ratingSummaryElement.querySelectorAll("p") as Iterable<Element>].map((p, index) => {
        const rating = `${5 - index}.0`
        const numberOfReviews = p.textContent?.trim() || "0"
        return { rating, numberOfReviews }
    }
    );
    return ratingSummary
}

function getHighlightFeatures(document: HTMLDocument) {
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
    return highlightFeatures
}

function getDescription(document: HTMLDocument) {
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
                    const strongText = strongElement.textContent || "";
                    if (strongText) {
                        productDescription.push({
                            type: "text",
                            text: strongText,
                            weight: "bold",
                        })
                    }
                })
            }
            const extraText = pTag.textContent
            if (extraText) {
                productDescription.push({
                    type: "text",
                    text: extraText,
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

    const boldTexts = productDescription.filter((description) => description.type === "text" && description.weight === "bold");

    boldTexts.forEach((boldText, index) => {
        productDescription.forEach((description, descriptionIndex) => {
            if (description.type === "text" && description.weight === "normal") {
                if (description.text?.includes(boldText.text as string)) {
                    productDescription[descriptionIndex] = {
                        ...description,
                        text: description.text?.replace(boldText.text as string, ""),
                    }
                }
            }
        })
    })

    productDescription = productDescription.filter((description) => description.type === "text" ? description.text?.trim() === "" ? false : true : true);

    return productDescription
}