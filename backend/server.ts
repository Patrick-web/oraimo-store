import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { fetchCategories, fetchCategoryProducts, fetchDailyDealsPage, fetchHomePage, fetchProduct, fetchProductReviews } from "./lib.ts";

const books = new Map<string, any>();
books.set("1", {
    id: "1",
    title: "The Hound of the Baskervilles",
    author: "Conan Doyle, Arthur",
});

const router = new Router();
router
    .get("/", (context) => {
        context.response.body = "Server  is running";
    })
    .get("/home", async (context) => {
        const { data, error } = await fetchHomePage()

        context.response.body = { data, error };
    })
    .get("/deals", async (context) => {
        const { data, error } = await fetchDailyDealsPage()

        context.response.body = { data, error };
    })
    .get("/categories", async (context) => {
        const { data, error } = await fetchCategories()

        context.response.body = { data, error };
    })
    .get("/products/:category", async (context) => {
        const category = context?.params?.category
        if (!category) {
            context.response.status = 401
            context.response.body = {
                error: "Please provide a category"
            }
            return
        }

        const { data, error } = await fetchCategoryProducts({ category })

        context.response.body = { data, error };
    })
    .get("/product/:slug", async (context) => {
        const slug = context?.params?.slug
        if (!slug) {
            context.response.status = 401
            context.response.body = {
                error: "Please provide the product slug"
            }
            return
        }

        const { data, error } = await fetchProduct({ slug })

        context.response.body = { data, error };
    })
    .get("/reviews/:productId", async (context) => {
        const productId = context?.params?.productId
        if (!productId) {
            context.response.status = 401
            context.response.body = {
                error: "Please provide the product productId"
            }
            return
        }

        const { data, error } = await fetchProductReviews({ productId })

        context.response.body = { data, error };
    })


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8000

await app.listen({ port: PORT });

console.log("Listening" + PORT);