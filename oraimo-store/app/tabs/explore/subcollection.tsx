import ProductCard, {
	ProductCardSkeleton,
} from "@/components/explore/ProductCard";
import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";

export default function SubCollectionPage() {
	const { collection } = useLocalSearchParams<{
		collection: string;
	}>();

	if (!collection) {
		return (
			<Page>
				<ThemedText>
					No collection found. Please go back and try again.
				</ThemedText>
				<ThemedButton label="Go Back" onPress={() => router.back()} />
			</Page>
		);
	}

	const collectionProductsQuery = useQuery<ReturnWrapper<ProductItemType[]>>({
		queryKey: [`collection/${collection}`],
		queryFn: () =>
			fetch(`${BASE_URL}/collections/${collection.toLowerCase()}`).then((res) =>
				res.json()
			),
	});

	const products = collectionProductsQuery.data?.data;

	console.log(products);

	return (
		<Page
			header={{
				title: collection,
			}}
			px={0}
			scrollable
			gap={10}
		>
			{collectionProductsQuery.isLoading && (
				<Box
					wrap="wrap"
					style={{ rowGap: 10 }}
					direction="row"
					block
					justify="space-between"
					px={15}
				>
					<ProductCardSkeleton />
					<ProductCardSkeleton />
					<ProductCardSkeleton />
					<ProductCardSkeleton />
				</Box>
			)}
			{products && (
				<Box
					wrap="wrap"
					style={{ rowGap: 10 }}
					direction="row"
					block
					justify="space-between"
					px={15}
				>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</Box>
			)}
		</Page>
	);
}
