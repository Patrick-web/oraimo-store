import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ProductsContainer from "@/components/reusable/ProductsContainer";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { useThemeColor } from "@/hooks/theme.hook";
import { Collection } from "@/types/collection.types";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { debounce } from "@/utils/debounce.util";
import { useQuery } from "@tanstack/react-query";
import { Stack, router, useLocalSearchParams } from "expo-router";
import React, { useRef } from "react";
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CollectionPage() {
	const { slug, collection: collectionJSON } = useLocalSearchParams<{
		slug: string;
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

	const queryUrl = `${BASE_URL}/collections/${slug}`;

	console.log({ queryUrl });

	const collectionProductsQuery = useQuery<ReturnWrapper<ProductItemType[]>>({
		queryKey: [`collections/${slug}`],
		queryFn: () => fetch(queryUrl).then((res) => res.json()),
	});

	const products = collectionProductsQuery.data?.data || [];
	console.log({ products });

	const surface = useThemeColor("surface");
	const background = useThemeColor("background");

	const insets = useSafeAreaInsets();

	const scrollY = useRef(new Animated.Value(0)).current;

	const debouncedScrollY = debounce(() => scrollY, 100);

	const headerHeight = scrollY.interpolate({
		inputRange: [0, 200],
		outputRange: [200, 80],
		extrapolate: "clamp",
	});

	const translateX = scrollY.interpolate({
		inputRange: [0, 100],
		outputRange: [0, 40],
		extrapolate: "clamp",
	});

	const translateY = scrollY.interpolate({
		inputRange: [0, 200],
		outputRange: [0, -118],
		extrapolate: "clamp",
	});

	// Animated blur radius
	const headerImageBlurRadius = scrollY.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 80],
		extrapolate: "clamp",
	});

	return (
		<>
			{collection.image ? (
				<Stack.Screen
					options={{
						title: "Product Details",
						header: () => (
							<Animated.View
								style={{
									height: headerHeight,
									backgroundColor: background,
									overflow: "hidden",
								}}
							>
								<Box position="relative">
									<Animated.Image
										source={{ uri: collection.image }}
										style={{
											width: "100%",
											height: 200,
										}}
										blurRadius={headerImageBlurRadius}
										resizeMode="cover"
									/>
									<Animated.View
										style={{
											transform: [{ translateX }, { translateY }],
										}}
									>
										<Box
											position="absolute"
											style={{ bottom: 0, left: 0, right: 0 }}
											pa={15}
										>
											<ThemedText color="white" size="xl" weight="bold">
												{collection.name}
											</ThemedText>
										</Box>
									</Animated.View>
									<Box
										direction="row"
										align="center"
										justify="space-between"
										gap={10}
										block
										px={15}
										py={15}
										position="absolute"
										style={{ top: insets.top, left: 0, right: 0 }}
									>
										<ThemedButton
											type="text"
											size="sm"
											onPress={() => {
												router.back();
											}}
										>
											<ThemedIcon name="arrow-left" size={25} color="white" />
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
							</Animated.View>
						),
					}}
				/>
			) : (
				<Stack.Screen
					options={{
						title: collection.name,
						headerStyle: {
							backgroundColor: background,
						},
						headerTitleAlign: "center",
						headerShadowVisible: false,
						headerRight: () => (
							<ThemedButton onPress={() => {}} type="text">
								<ThemedIcon name="search" size={25} />
							</ThemedButton>
						),
					}}
				/>
			)}
			<Page
				px={0}
				scrollable
				gap={10}
				onScroll={
					Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
						useNativeDriver: false,
					}) as any
				}
			>
				{collection.subCollections && (
					<Box>
						{collection.subCollections.map((subCollection) => (
							<ThemedButton
								key={subCollection.name}
								onPress={() => {
									router.push({
										pathname: `/collections/${subCollection.slug}`,
										params: {
											collection: JSON.stringify(subCollection),
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
		</>
	);
}
