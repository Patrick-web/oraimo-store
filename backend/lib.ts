import { getCollectionsFromHtml, getMainCollections, getProductDetail, getProductReviews, getProductsFromHtml } from "./parsers.ts";

export async function fetchHomePage() {
    try {
        const resp = await fetch("https://ke.oraimo.com/", {
            "method": "GET",
        });
        const html = await resp.text()
        const { products, error } = getProductsFromHtml(html)
        const { mainCollections, error: error2 } = getMainCollections(html)
        if (error || error2) {
            throw error || error2
        }
        return { data: { mainCollections, products, } }
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

export async function fetchCollections() {
    try {
        const resp = await fetch(`https://ke.oraimo.com/`, {
            "method": "GET",
        });
        const html = await resp.text()
        const { categories, error } = getCollectionsFromHtml(html)
        if (error) {
            throw error
        }
        return { data: categories }
    } catch (error) {
        console.log({ error });
        return { error }
    }
}
export async function fetchCollectionProducts({ collection }: { collection: string }) {
    try {
        const resp = await fetch(`https://ke.oraimo.com/collections/${collection}`, {
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
        const resp = await fetch(`https://ke.oraimo.com/product/${slug}`, {
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


export async function fetchSearchProducts({ query }: { query: string }) {
    try {
        const resp = await fetch(`https://ke.oraimo.com/search?keyword=${query}`, {
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