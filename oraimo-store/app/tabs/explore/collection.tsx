import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ProductsContainer from "@/components/reusable/ProductsContainer";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { Collection } from "@/types/collection.types";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function CollectionPage() {
	const { collection: collectionJSON } = useLocalSearchParams<{
		collection: string;
	}>();

	if (!collectionJSON) {
		return (
			<Page>
				<ThemedText>Error</ThemedText>
			</Page>
		);
	}

	const collection = JSON.parse(collectionJSON) as Collection;

	const collectionProductsQuery = useQuery<ReturnWrapper<ProductItemType[]>>({
		queryKey: [`collection/${collection.name}`],
		queryFn: () =>
			fetch(`${BASE_URL}/collections/${collection.name.toLowerCase()}`).then(
				(res) => res.json()
			),
	});

	const products = collectionProductsQuery.data?.data || [];

	return (
		<Page px={0} scrollable gap={10} disableHeader>
			{collection.image && (
				<Box position="relative">
					<Image
						source={{ uri: collection.image }}
						style={{ width: "100%", height: 200 }}
						resizeMode="cover"
					/>
					<Box
						position="absolute"
						style={{ bottom: 0, left: 0, right: 0 }}
						pa={15}
					>
						<ThemedText color="white" size="xl" fontWeight="bold">
							{collection.name}
						</ThemedText>
					</Box>
					<Box
						direction="row"
						align="center"
						justify="space-between"
						gap={10}
						block
						px={15}
						py={15}
						position="absolute"
						style={{ top: 0, left: 0, right: 0 }}
					>
						<ThemedButton
							type="text"
							size="sm"
							onPress={() => {
								router.back();
							}}
						>
							<ThemedIcon name="chevron-left" size={25} color="white" />
						</ThemedButton>

						<ThemedButton
							type="text"
							size="sm"
							onPress={() => {
								router.back();
							}}
						>
							<ThemedIcon name="search" size={25} color="white" />
						</ThemedButton>
					</Box>
				</Box>
			)}
			{collection.subCollections && (
				<Box>
					{collection.subCollections.map((subCollection) => (
						<ThemedButton
							key={subCollection.name}
							onPress={() => {
								router.push({
									pathname: "/tabs/explore/subcollection",
									params: {
										name: subCollection.name,
										link: subCollection.link,
									},
								});
							}}
							type="text"
							label={subCollection.name}
							icon={{
								name: "chevron-right",
								position: "append",
							}}
							wrapperProps={{
								justify: "space-between",
							}}
							size="sm"
						/>
					))}
				</Box>
			)}
			<ProductsContainer
				products={products}
				loading={collectionProductsQuery.isLoading}
				numberOfSkeletons={4}
			/>
		</Page>
	);
}
