import ImageViewer from "@/components/ImageViewer";
import { ReviewStars } from "@/components/ReviewStars";
import DescriptionAndReviews from "@/components/product/Description&Reviews";
import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { FullProduct, ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { Stack, router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const imageSize = sWidth - 100;

export default function Product() {
	const { slug, preview: previewJSON } = useLocalSearchParams<{
		preview: string;
		slug: string;
	}>();

	const preview = JSON.parse(previewJSON) as ProductItemType;

	const queryUrl = `${BASE_URL}/product/${slug}`;

	const { data, isLoading, isError, error } = useQuery<
		ReturnWrapper<FullProduct>
	>({
		queryKey: [`product/${slug}`],
		queryFn: () => fetch(queryUrl).then((res) => res.json()),
	});

	const product = data?.data;
	const surface = useThemeColor("surface");
	const background = useThemeColor("background");
	const color = useThemeColor("text");

	const [showImagesViewer, setShowImagesViewer] = useState(false);
	const [imageViewerShow, setImageViewerShow] = useState(0);

	const primaryColor = useThemeColor("primary");

	return (
		<>
			<Stack.Screen
				options={{
					title: "",
					headerStyle: {
						backgroundColor: background,
					},
					headerTitleAlign: "center",
					// remove shadow
					headerShadowVisible: false,
					headerRight: () => (
						<ThemedButton
							onPress={() => {
								router.back();
							}}
							type="text"
						>
							<ThemedIcon name="shopping-cart" size={22} />
						</ThemedButton>
					),
				}}
			/>
			<Page scrollable position="relative" pb={90}>
				{isError && <ThemedText>{error.message}</ThemedText>}
				{isLoading && preview && <ProductPreview product={preview} />}
				{product && (
					<Box block gap={20}>
						<Box block>
							<Carousel
								data={product.images}
								renderItem={({ item, index }) => (
									<ThemedButton
										type="text"
										onPress={() => {
											setShowImagesViewer(true);
											setImageViewerShow(index);
										}}
									>
										<Box color={surface} mx={10} radius={20}>
											<Image
												source={{ uri: item }}
												style={{
													width: imageSize,
													height: imageSize,
													borderRadius: 20,
												}}
												contentFit="cover"
											/>
										</Box>
									</ThemedButton>
								)}
								width={imageSize + 20}
								height={imageSize}
								style={{ width: sWidth - 30 }}
								pagingEnabled
								panGestureHandlerProps={{
									activeOffsetX: [-10, 10],
								}}
							/>
						</Box>
						<Box block gap={20}>
							<Box block gap={5}>
								<ThemedText weight="bold" size={"lg"}>
									{product.name}
								</ThemedText>
								<Box direction="row" gap={10} align="center">
									{product.discountedPrice && (
										<ThemedText weight="bold" size={"xl"} color={primaryColor}>
											Ksh {product.discountedPrice}
										</ThemedText>
									)}
									<ThemedText
										textDecorationLine="line-through"
										textDecorationStyle="solid"
										style={{ opacity: 0.8 }}
										size={"sm"}
									>
										Ksh {product.price}
									</ThemedText>
								</Box>
								<Box direction="row" gap={20} align="center">
									<ReviewStars
										size={18}
										rating={
											Number(product?.overallRating) || Number(preview.rating)
										}
									/>
									<ThemedText size={"sm"}>
										({product.numberOfReviews} Rating
										{product.numberOfReviews.length > 1 ? "s" : ""})
									</ThemedText>
								</Box>
							</Box>

							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								<Box align="flex-start" gap={10}>
									<Box direction="row" gap={10}>
										{product.highlightFeatures
											.sort((a, b) => a.label.length - b.label.length)
											.splice(0, product.highlightFeatures.length / 2)
											.map((feature) => (
												<HighlightFeature
													key={feature.label}
													feature={feature}
												/>
											))}
									</Box>
									<Box direction="row" gap={10}>
										{product.highlightFeatures
											.sort((a, b) => a.label.length - b.label.length)
											.splice(product.highlightFeatures.length / 2)
											.map((feature) => (
												<HighlightFeature
													key={feature.label}
													feature={feature}
												/>
											))}
									</Box>
								</Box>
							</ScrollView>
							<Box
								block
								color={surface}
								pa={15}
								radius={15}
								gap={10}
								direction="row"
								justify="space-between"
								wrap="wrap"
							>
								{product.parameters
									.sort((a, b) => a.value.length - b.value.length)
									.map((parameter) => (
										<Parameter key={parameter.label} parameter={parameter} />
									))}
							</Box>
							<DescriptionAndReviews
								reviews={product.firstReviews}
								description={product.description}
							/>
						</Box>
					</Box>
				)}
			</Page>
			<Box
				position="absolute"
				style={{
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 100,
				}}
				direction="row"
				gap={20}
				pa={20}
				color={background}
			>
				<ThemedButton label={"Add To Cart"} size="sm" flex={1} type="surface" />
				<ThemedButton
					label={"Buy Now"}
					size="sm"
					flex={1}
					type="primary"
					labelProps={{
						weight: "bold",
					}}
				/>
			</Box>
			<ImageViewer
				images={product?.images || []}
				visible={showImagesViewer}
				close={() => {
					setShowImagesViewer(false);
				}}
				selectedIndex={imageViewerShow}
			/>
		</>
	);
}

function HighlightFeature({
	feature,
}: {
	feature: FullProduct["highlightFeatures"][0];
}) {
	const textColor = useThemeColor("text");
	const surface = useThemeColor("surface");
	return (
		<Box
			direction="row"
			align="center"
			gap={10}
			color={surface}
			pa={10}
			radius={30}
		>
			<Image
				source={{ uri: feature.image }}
				style={{ width: 30, height: 30 }}
				tintColor={textColor}
			/>
			<ThemedText size={"sm"} style={{ flex: 1 }} numberOfLines={2}>
				{feature.label}
			</ThemedText>
		</Box>
	);
}

function Parameter({ parameter }: { parameter: FullProduct["parameters"][0] }) {
	const textColor = useThemeColor("text");
	const surface = useThemeColor("surface");
	return (
		<Box width={"48%"}>
			<ThemedText size={"sm"}>{parameter.value}</ThemedText>
			<ThemedText size={"xs"} style={{ opacity: 0.5 }}>
				{parameter.label}
			</ThemedText>
		</Box>
	);
}

function DescriptionItem({ desc }: { desc: FullProduct["description"][0] }) {
	const surface = useThemeColor("surface");
	if (desc.type === "text") {
		return (
			<ThemedText
				size={desc.weight === "bold" ? "md" : "sm"}
				weight={desc.weight}
			>
				{desc.text}
			</ThemedText>
		);
	}
	const [imageLoaded, setImageLoaded] = React.useState(true);
	if (desc.type === "image") {
		return (
			<Box>
				<Box color={surface} radius={20}>
					<Image
						source={{ uri: desc.src }}
						style={{
							width: sWidth - 30,
							height: imageLoaded ? sWidth - 30 : 0,
						}}
						contentFit="fill"
						onError={(error) => {
							setImageLoaded(false);
							console.log("Error loading image");
						}}
						onLoad={() => {
							setImageLoaded(true);
						}}
					/>
				</Box>
			</Box>
		);
	}
}

function ProductPreview({ product }: { product: ProductItemType }) {
	const surface = useThemeColor("surface");

	return (
		<Box gap={10} align="flex-start">
			<Box color={surface} ml={10} radius={20} align="flex-start">
				<Image
					source={{ uri: product.image }}
					style={{
						width: imageSize,
						height: imageSize,
						borderRadius: 20,
					}}
					contentFit="cover"
				/>
			</Box>
			<Box block gap={5}>
				<ThemedText weight="bold" size={"lg"}>
					{product.name}
				</ThemedText>
				<Box direction="row" gap={10} align="center">
					{product.discountedPrice && (
						<ThemedText weight="bold" size={"xl"} color={"#03B068"}>
							Ksh {product.discountedPrice}
						</ThemedText>
					)}
					<ThemedText
						textDecorationLine="line-through"
						textDecorationStyle="solid"
						style={{ opacity: 0.8 }}
						size={"sm"}
					>
						Ksh {product.price}
					</ThemedText>
				</Box>
			</Box>
		</Box>
	);
}

function ReviewCard({ review }: { review: FullProduct["firstReviews"][0] }) {
	const textColor = useThemeColor("text");
	const surface = useThemeColor("surface");
	return (
		<Box color={surface} radius={15} pa={15} gap={5} width={"95%"}>
			<ThemedText size="xs" style={{ opacity: 0.7 }}>
				{review.date}
			</ThemedText>
			<ReviewStars rating={Number(review.rating)} />
			<Box>
				<ThemedText weight="bold">{review.title}</ThemedText>
				<ThemedText size="sm">{review.content}</ThemedText>
			</Box>
			<ThemedText size="xs">by {review.user}</ThemedText>
		</Box>
	);
}
