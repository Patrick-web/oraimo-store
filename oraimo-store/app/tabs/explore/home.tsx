import MainCollectionCard, {
	MainCollectionCardSkeleton,
} from "@/components/explore/MainCollectionCard";
import OtherCollectionCard from "@/components/explore/OtherCollectionCard";
import ProductCard, {
	ProductCardSkeleton,
	productImageSize,
} from "@/components/explore/ProductCard";
import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import { SearchBar } from "@/components/reusable/TextInputs";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { Collection, MainCollectionType } from "@/types/collection.types";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { animateLayout } from "@/utils/animation.util";
import { useQuery } from "@tanstack/react-query";
import { Stack, router } from "expo-router";
import { useRef, useState } from "react";
import { Animated, Pressable } from "react-native";
import RAnimated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { AnimatedScrollView } from "react-native-reanimated/lib/typescript/reanimated2/component/ScrollView";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

	const collectionsQuery = useQuery<ReturnWrapper<Collection[]>>({
		queryKey: ["collections"],
		queryFn: () => fetch(`${BASE_URL}/collections`).then((res) => res.json()),
		enabled: !homeQuery.isLoading,
		refetchOnMount: true,
	});

	const mainCollections = homeQuery.data?.data.mainCollections;

	const collections = collectionsQuery.data?.data.filter(
		(c) => !mainCollections?.find((mc) => mc.name === c.name)
	);

	const products = homeQuery.data?.data.products;

	const background = useThemeColor("background");
	const textColor = useThemeColor("text");
	const insets = useSafeAreaInsets();

	const [searchQuery, setSearchQuery] = useState("");

	const scrollY = useRef(new Animated.Value(0)).current;
	const logoWidth = scrollY.interpolate({
		inputRange: [0, 100],
		outputRange: [160, 80],
	});
	const logoHeight = scrollY.interpolate({
		inputRange: [0, 100],
		outputRange: [60, 30],
	});

	if (collectionsQuery.isLoading || !collections || !products) {
		return <HomeSkeleton />;
	}

	if (homeQuery.isError || collectionsQuery.isError) {
		return <HomeError />;
	}

	const scrollViewRef = useAnimatedRef<AnimatedScrollView>();
	const scrollOffset = useScrollViewOffset(scrollViewRef);

	const logoStyle = useAnimatedStyle(() => {
		return {
			width: interpolate(scrollOffset.value, [0, 100], [160, 80]),
			height: interpolate(scrollOffset.value, [0, 100], [60, 30]),
		};
	});

	const expandCollections = useSharedValue(false);
	const otherCollectionsStyle = useAnimatedStyle(() => {
		return {
			maxHeight: withTiming(expandCollections.value ? "100%" : "0%"),
		};
	});
	const expanderChevronStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${expandCollections.value ? "180deg" : "0deg"}` }],
		};
	});

	return (
		<>
			<Stack.Screen
				options={{
					header: () => (
						<Box
							block
							align="center"
							pt={insets.top + 10}
							pb={5}
							px={15}
							color={background}
							justify="center"
						>
							<RAnimated.Image
								source={require("@/assets/images/logo.png")}
								style={[logoStyle]}
								resizeMode="contain"
								tintColor={textColor}
							/>
							<Box block>
								<SearchBar
									placeholder="Search"
									onChangeText={setSearchQuery}
									onSubmitEditing={() => {
										router.push({
											pathname: "/search",
											params: {
												query: searchQuery,
											},
										});
									}}
								/>
							</Box>
						</Box>
					),
				}}
			/>

			<Page gap={40} pb={120}>
				<RAnimated.ScrollView ref={scrollViewRef}>
					<Box gap={10}>
						{mainCollections && (
							<Box gap={10} wrap="wrap" direction="row">
								{mainCollections.map((collection) => (
									<Pressable
										style={{ width: "48%" }}
										onPress={() => {
											router.push({
												pathname: `/collections/${collection.name}`,
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
						<RAnimated.View
							style={[otherCollectionsStyle, { overflow: "hidden" }]}
						>
							<Box gap={10} wrap="wrap" direction="row">
								{collections.map((collection) => (
									<Pressable
										style={{ width: "48%" }}
										onPress={() => {
											router.push({
												pathname: `/collections/${collection.name}`,
												params: {
													collection: JSON.stringify(collection),
												},
											});
										}}
										key={collection.name}
									>
										<OtherCollectionCard {...collection} />
									</Pressable>
								))}
							</Box>
						</RAnimated.View>
						<Box>
							<RAnimated.View style={[expanderChevronStyle]}>
								<ThemedButton
									onPress={() => {
										animateLayout();
										expandCollections.value = !expandCollections.value;
									}}
									type="text"
								>
									<ThemedIcon name={"chevron-down"} />
								</ThemedButton>
							</RAnimated.View>
						</Box>
					</Box>

					{products && (
						<>
							<Box gap={10}>
								<ThemedText size="lg" weight="bold">
									Featured
								</ThemedText>
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
				</RAnimated.ScrollView>
			</Page>
		</>
	);
}

function HomeSkeleton() {
	const surface = useThemeColor("surface");
	const insets = useSafeAreaInsets();
	const textColor = useThemeColor("text");
	const background = useThemeColor("background");

	return (
		<>
			<Stack.Screen
				options={{
					header: () => (
						<Box
							block
							align="center"
							pt={insets.top + 10}
							pb={5}
							px={15}
							color={background}
							justify="center"
						>
							<Animated.Image
								source={require("@/assets/images/logo.png")}
								style={{
									width: 160,
									height: 60,
								}}
								resizeMode="contain"
								tintColor={textColor}
							/>
							<Box block>
								<SearchBar />
							</Box>
						</Box>
					),
				}}
			/>
			<Page px={15} gap={20} scrollable>
				<Box gap={10} wrap="wrap" direction="row">
					<MainCollectionCardSkeleton />
					<MainCollectionCardSkeleton />
					<MainCollectionCardSkeleton />
					<MainCollectionCardSkeleton />
				</Box>

				<Box gap={10}>
					<Box height={20} width={100} radius={5} color={surface} />
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
					<Box height={20} width={100} radius={5} color={surface} />
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
		</>
	);
}

function HomeError() {
	return (
		<Page>
			<ThemedText>Error</ThemedText>
		</Page>
	);
}
