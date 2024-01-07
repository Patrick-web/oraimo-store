import ImageViewer from "@/components/ImageViewer";
import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ThemedModal from "@/components/reusable/ThemedModal";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { sHeight, sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { FullProduct, ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const imageSize = sWidth - 100;

export default function Product() {
	const { preview: previewJSON } = useLocalSearchParams<{ preview: string }>();

	const preview = JSON.parse(previewJSON) as ProductItemType;

	const queryUrl = `${BASE_URL}${preview.link}`;

	const fetchProductQuery = useQuery<ReturnWrapper<FullProduct>>({
		queryKey: [`product/${preview.id}`],
		queryFn: () => fetch(queryUrl).then((res) => res.json()),
	});

	const product = fetchProductQuery.data?.data;
	const surface = useThemeColor("surface");

	return (
		<Page header={{ title: "Product Details" }} scrollable>
			{fetchProductQuery.isError && <ThemedText>Error...</ThemedText>}
			{fetchProductQuery.isLoading && preview && (
				<ProductPreview product={preview} />
			)}
			{product && (
				<Box block gap={20}>
					<Box block>
						<Carousel
							data={product.images}
							renderItem={({ item }) => (
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

						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<Box align="flex-start" gap={10}>
								<Box direction="row" gap={10}>
									{product.highlightFeatures
										.sort((a, b) => a.label.length - b.label.length)
										.splice(0, product.highlightFeatures.length / 2)
										.map((feature) => (
											<HighlightFeature key={feature.label} feature={feature} />
										))}
								</Box>
								<Box direction="row" gap={10}>
									{product.highlightFeatures
										.sort((a, b) => a.label.length - b.label.length)
										.splice(product.highlightFeatures.length / 2)
										.map((feature) => (
											<HighlightFeature key={feature.label} feature={feature} />
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
						<Box gap={10}>
							{product.description.map((desc, index) => (
								<DescriptionItem key={index} desc={desc} />
							))}
						</Box>
					</Box>
				</Box>
			)}
		</Page>
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
		<Box>
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
	const [showImageViewer, setShowImageViewer] = React.useState(false);
	if (desc.type === "image") {
		return (
			<>
				<ThemedButton type="text" onPress={() => setShowImageViewer(true)}>
					<Box color={surface} radius={20}>
						<Image
							source={{ uri: desc.src }}
							style={{ width: sWidth - 30, height: sWidth - 30 }}
							contentFit="fill"
						/>
					</Box>
				</ThemedButton>
				<ThemedModal
					visible={showImageViewer}
					close={() => setShowImageViewer(false)}
					position="bottom"
					containerProps={{ style: {} }}
				>
					<Box height={sHeight - 30} width={sWidth - 40}>
						<ImageViewer source={desc.src || ""} />
					</Box>
				</ThemedModal>
			</>
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
