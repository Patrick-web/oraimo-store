import { Middleware } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const authMiddleware: Middleware = async (context, next) => {
    if (context.request.url.pathname.startsWith("/api")) {
        const bearerToken = context.request.headers.get("authorization");

        if (!bearerToken) {
            context.response.status = 401;
            context.response.body = {
                error: "Missing bearer token",
            };
            return;
        }

        await next();
    } else {
        await next();
    }
}
