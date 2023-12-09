import { getCategoriesFromHtml, getProductsFromHtml } from "./parsers.ts";

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
