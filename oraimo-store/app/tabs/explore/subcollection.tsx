import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ProductsContainer from "@/components/reusable/ProductsContainer";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";

export default function SubCollectionPage() {
	const { link, name } = useLocalSearchParams<{
		name: string;
		link: string;
	}>();

	if (!link) {
		return (
			<Page>
				<ThemedText>
					No collection found. Please go back and try again.
				</ThemedText>
				<ThemedButton label="Go Back" onPress={() => router.back()} />
			</Page>
		);
	}

	const queryUrl = `${BASE_URL}${link}`;

	console.log({ queryUrl });

	const collectionProductsQuery = useQuery<ReturnWrapper<ProductItemType[]>>({
		queryKey: [`collection/${link}`],
		queryFn: () => fetch(queryUrl).then((res) => res.json()),
	});

	const products = collectionProductsQuery.data?.data || [];

	return (
		<Page
			header={{
				title: name,
			}}
			px={0}
			scrollable
			gap={10}
		>
			<ProductsContainer
				products={products}
				loading={collectionProductsQuery.isLoading}
			/>
		</Page>
	);
}
