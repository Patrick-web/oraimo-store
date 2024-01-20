import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { UserResponse } from "../types/Account.types.ts";
import { CartResponse, MiniListResponse, QuantityResponse } from "../types/Cart.types.ts";
import { OrderResponse } from "../types/Order.types.ts";
import { AddToWishListResponse, WishResponse } from "../types/Wish.types.ts";
import {
  fetchCollectionProducts,
  fetchCollections,
  fetchDailyDealsPage,
  fetchHomePage,
  fetchProduct,
  fetchProductReviews,
  fetchSearchProducts,
} from "./lib.ts";
import { authMiddleware } from "./middleware/auth.middleware.ts";

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
  })
  .get("/api/user", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;
    try {
      const resp = await fetch("https://ke.oraimo.com/api/user", {
        headers: {
          "Authorization": bearerToken
        }
      })
      const data = await resp.json() as UserResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  })
  .get("/api/cart/mini-list", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;

    try {
      const resp = await fetch("https://ke.oraimo.com/api/cart/mini-list", {
        headers: {
          "Authorization": bearerToken
        }
      })
      const data = await resp.json() as MiniListResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  })
  .get("/api/cart", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;

    try {
      const resp = await fetch("https://ke.oraimo.com/api/cart", {
        headers: {
          "Authorization": bearerToken
        }
      })
      const data = await resp.json() as CartResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  })
  .get("/api/cart/qty", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;

    try {
      const resp = await fetch("https://ke.oraimo.com/api/cart/qty", {
        headers: {
          "Authorization": bearerToken
        }
      })
      const data = await resp.json() as QuantityResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  }).get("/api/order/:type", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;

    const OrderTypes = new Map<string, string>([
      ["all", ""],
      ["prepaid", "1"],
      ["tobereceived", "2"],
      ["completed", "3"],
      ["canceled", "4"],
    ]);

    const type = context?.params?.type;
    let type_id = OrderTypes.get(type || "") || "";

    try {
      const resp = await fetch(`https://ke.oraimo.com/api/order?${type_id}`, {
        headers: {
          "Authorization": bearerToken
        }
      })
      const data = await resp.json() as OrderResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  })
  .get("/api/wish", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;

    try {
      const resp = await fetch("https://ke.oraimo.com/api/wish", {
        headers: {
          "Authorization": bearerToken
        }
      })
      const data = await resp.json() as WishResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  }).post("/api/wish", async (context) => {
    const bearerToken = context.request.headers.get("Authorization")!;
    const data = context.request.body({ type: "json" });
    console.log({ data });
    const { productId } = await data.value;

    if (!productId) {
      context.response.status = 401;
      context.response.body = {
        error: "Please provide the product productId",
      };
      return;
    }

    try {
      const resp = await fetch("https://ke.oraimo.com/api/wish", {
        method: "POST",
        headers: {
          "Authorization": bearerToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          product_id: productId
        })
      })
      const data = await resp.json() as AddToWishListResponse;
      context.response.body = { data: data.data, error: null };
    } catch (error) {
      context.response.status = 401;
      context.response.body = {
        error: "Invalid bearer token",
      };
      return;
    }
  });

const app = new Application();

app.use(authMiddleware)

app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(`${context.request.method} ${context.request.url} - ${rt}`);
});
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8000;

await app.listen({ port: PORT });

console.log("Listening" + PORT);
