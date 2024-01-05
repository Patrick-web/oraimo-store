import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import {
  fetchCollectionProducts,
  fetchCollections,
  fetchDailyDealsPage,
  fetchHomePage,
  fetchProduct,
  fetchProductReviews,
  fetchSearchProducts,
} from "./lib.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Server  is running";
  })
  .get("/home", async (context) => {
    const { data, error } = await fetchHomePage();

    context.response.body = { data, error };
  })
  .get("/deals", async (context) => {
    const { data, error } = await fetchDailyDealsPage();

    context.response.body = { data, error };
  })
  .get("/collections", async (context) => {
    const { data, error } = await fetchCollections();

    context.response.body = { data, error };
  })
  .get("/collections/:collection", async (context) => {
    const collection = context?.params?.collection;
    if (!collection) {
      context.response.status = 401;
      context.response.body = {
        error: "Please provide a collection",
      };
      return;
    }

    const { data, error } = await fetchCollectionProducts({ collection });

    context.response.body = { data, error };
  })
  .get("/product/:slug", async (context) => {
    const slug = context?.params?.slug;
    if (!slug) {
      context.response.status = 401;
      context.response.body = {
        error: "Please provide the product slug",
      };
      return;
    }

    const { data, error } = await fetchProduct({ slug });

    context.response.body = { data, error };
  })
  .get("/reviews/:productId", async (context) => {
    const productId = context?.params?.productId;
    if (!productId) {
      context.response.status = 401;
      context.response.body = {
        error: "Please provide the product productId",
      };
      return;
    }

    const { data, error } = await fetchProductReviews({ productId });

    context.response.body = { data, error };
  })
  .post("/search/:query", async (context) => {
    const query = context?.params?.query;
    if (!query) {
      context.response.status = 401;
      context.response.body = {
        error: "Please provide a search query",
      };
      return;
    }

    const { data, error } = await fetchSearchProducts({ query });

    context.response.body = { data, error };
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
// log all requests
app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(`${context.request.method} ${context.request.url} - ${rt}`);
});

const PORT = 8000;

await app.listen({ port: PORT });

console.log("Listening" + PORT);
