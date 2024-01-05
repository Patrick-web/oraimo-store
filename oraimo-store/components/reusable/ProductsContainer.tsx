import { sHeight } from "@/constants/Window";
import { ProductItemType } from "@/types/product.types";
import React from "react";
import { Image } from "react-native";
import ProductCard, { ProductCardSkeleton } from "../explore/ProductCard";
import Box from "./Box";
import ThemedText from "./ThemedText";

export default function ProductsContainer({
	products,
	loading,
	numberOfSkeletons = 6,
}: {
	products: ProductItemType[];
	loading: boolean;
	numberOfSkeletons?: number;
}) {
	return (
		<Box
			wrap="wrap"
			style={{ rowGap: 10 }}
			direction="row"
			block
			justify="space-between"
			px={15}
		>
			{loading ? (
				<>
					{Array.from(Array(numberOfSkeletons).keys()).map((i) => (
						<ProductCardSkeleton key={i} />
					))}
				</>
			) : (
				<>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</>
			)}
			{!loading && products.length === 0 && (
				<Box
					align="center"
					justify="center"
					height={sHeight - 200}
					width={"100%"}
				>
					<Image
						source={require("@/assets/images/empty.png")}
						style={{
							width: 300,
							height: 300,
							resizeMode: "contain",
						}}
					/>
					<ThemedText size={"lg"}>No Products found</ThemedText>
				</Box>
			)}
		</Box>
	);
}
