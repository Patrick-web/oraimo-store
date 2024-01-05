import MainCollectionCard, {
	MainCollectionCardSkeleton,
} from "@/components/explore/MainCollectionCard";
import ProductCard, {
	ProductCardSkeleton,
	productImageSize,
} from "@/components/explore/ProductCard";
import Box from "@/components/reusable/Box";
import Page from "@/components/reusable/Page";
import { SearchBar } from "@/components/reusable/TextInputs";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { CollectionType, MainCollectionType } from "@/types/collection.types";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Home() {
	const homeQuery = useQuery<
		ReturnWrapper<{
			products: ProductItemType[];
			mainCollections: MainCollectionType[];
		}>
	>({
		queryKey: ["home"],
		queryFn: () => fetch(`${BASE_URL}/home`).then((res) => res.json()),
		refetchOnMount: true,
	});

	if (homeQuery.isLoading) {
		console.log("loading Home Query");
	}

	const collectionsQuery = useQuery<ReturnWrapper<CollectionType[]>>({
		queryKey: ["collections"],
		queryFn: () => fetch(`${BASE_URL}/collections`).then((res) => res.json()),
		enabled: !homeQuery.isLoading,
		refetchOnMount: true,
	});

	if (collectionsQuery.isLoading) {
		console.log("loading Collections Query");
	}

	if (collectionsQuery.isLoading) {
		return <HomeSkeleton />;
	}

	if (homeQuery.isError || collectionsQuery.isError) {
		return <HomeError />;
	}

	const mainCollections = homeQuery.data?.data.mainCollections;

	const collections = collectionsQuery.data?.data.map((collection) => ({
		...collection,
		image:
			mainCollections?.find(
				(mainCollection) => mainCollection.name === collection.name
			)?.image || collection.image,
	}));

	const products = homeQuery.data?.data.products;

	return (
		<Page px={15} py={15} gap={15} scrollable disableHeader>
			<SearchBar />
			{collections && (
				<Box gap={10} wrap="wrap" direction="row">
					{collections.map((collection) => (
						<Pressable
							style={{ width: "48%" }}
							onPress={() => {
								router.push({
									pathname: "/tabs/explore/collection",
									params: {
										collection: JSON.stringify(collection),
									},
								});
							}}
							key={collection.name}
						>
							<MainCollectionCard {...collection} />
						</Pressable>
					))}
				</Box>
			)}

			{products && (
				<>
					<Box gap={10}>
						<ThemedText size="lg" weight="bold">
							Featured
						</ThemedText>
						{/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{products.slice(0, 8).map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ScrollView> */}
						<Carousel
							data={products.slice(0, 8)}
							renderItem={({ item }) => (
								<ProductCard key={item.name} product={item} />
							)}
							width={productImageSize + 20}
							height={productImageSize + 100}
							autoPlay
							autoPlayInterval={2000}
							style={{ width: sWidth - 30 }}
							pagingEnabled
							panGestureHandlerProps={{
								activeOffsetX: [-10, 10],
							}}
						/>
					</Box>

					<Box gap={10}>
						<ThemedText size="lg" weight="bold">
							New Arrivals
						</ThemedText>
						<Box
							wrap="wrap"
							style={{ rowGap: 10 }}
							direction="row"
							block
							justify="space-between"
						>
							{products.slice(8).map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</Box>
					</Box>
				</>
			)}
		</Page>
	);
}

function HomeSkeleton() {
	const background = useThemeColor("surface");
	return (
		<Page px={15} gap={20} scrollable>
			<SearchBar />
			<Box gap={10} wrap="wrap" direction="row">
				<MainCollectionCardSkeleton />
				<MainCollectionCardSkeleton />
				<MainCollectionCardSkeleton />
				<MainCollectionCardSkeleton />
			</Box>

			<Box gap={10}>
				<Box height={20} width={100} radius={5} color={background} />
				<Box
					wrap="wrap"
					style={{ rowGap: 10 }}
					direction="row"
					block
					justify="space-between"
				>
					<ProductCardSkeleton />
					<ProductCardSkeleton />
					<ProductCardSkeleton />
					<ProductCardSkeleton />
				</Box>
			</Box>

			<Box gap={10}>
				<Box height={20} width={100} radius={5} color={background} />
				<Box
					wrap="wrap"
					style={{ rowGap: 10 }}
					direction="row"
					block
					justify="space-between"
				>
					<ProductCardSkeleton />
					<ProductCardSkeleton />
					<ProductCardSkeleton />
					<ProductCardSkeleton />
				</Box>
			</Box>
		</Page>
	);
}

function HomeError() {
	return (
		<Page>
			<ThemedText>Error</ThemedText>
		</Page>
	);
}
