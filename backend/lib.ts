import { getCategoriesFromHtml, getProductDetail, getProductReviews, getProductsFromHtml } from "./parsers.ts";

export async function fetchHomePage() {
    try {
        const resp = await fetch("https://ke.oraimo.com/", {
            "method": "GET",
        });
        const html = await resp.text()
        const { products, error } = getProductsFromHtml(html)
        if (error) {
            throw error
        }
        return { data: products }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}

export async function fetchDailyDealsPage() {
    try {
        const resp = await fetch("https://ke.oraimo.com/oraimo-daily-deals.html", {
            "method": "GET",
        });
        const html = await resp.text()
        const { products, error } = getProductsFromHtml(html)
        if (error) {
            throw error
        }
        return { data: products }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}

export async function fetchCategories() {
    try {
        const resp = await fetch(`https://ke.oraimo.com/`, {
            "method": "GET",
        });
        const html = await resp.text()
        const { categories, error } = getCategoriesFromHtml(html)
        if (error) {
            throw error
        }
        return { data: categories }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}
export async function fetchCategoryProducts({ category }: { category: string }) {
    try {
        const resp = await fetch(`https://ke.oraimo.com/products/${category}.html`, {
            "method": "GET",
        });
        const html = await resp.text()
        const { products, error } = getProductsFromHtml(html)
        if (error) {
            throw error
        }
        return { data: products }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}

export async function fetchProduct({ slug }: { slug: string }) {
    try {
        const resp = await fetch(`https://ke.oraimo.com/${slug}.html`, {
            "method": "GET",
        });
        const html = await resp.text()
        const { product, error } = getProductDetail(html)
        if (error) {
            throw error
        }
        return { data: product }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}

export async function fetchProductReviews({ productId }: { productId: string }) {
    try {
        const resp = await fetch(`https://ke.oraimo.com/review/product/listAjax/id/${productId}`, {
            "method": "GET",
        });
        const html = await resp.text()
        const { reviews, error } = await getProductReviews(html)
        if (error) {
            throw error
        }
        return { data: reviews }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}
