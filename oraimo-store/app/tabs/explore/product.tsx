import Box from "@/components/reusable/Box";
import Page from "@/components/reusable/Page";
import ThemedText from "@/components/reusable/ThemedText";
import { BASE_URL } from "@/constants/API";
import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { FullProduct, ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
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
			{fetchProductQuery.isLoading && <ThemedText>Loading...</ThemedText>}
			{fetchProductQuery.isError && <ThemedText>Error...</ThemedText>}
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

						<Box
							direction="row"
							gap={10}
							block
							wrap="wrap"
							align="center"
							justify="center"
						>
							{product.highlightFeatures
								.sort((a, b) => a.label.length - b.label.length)
								.map((feature) => (
									<HighlightFeature key={feature.label} feature={feature} />
								))}
						</Box>
						<Box
							block
							justify="center"
							color={surface}
							pa={15}
							radius={15}
							gap={5}
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
			width={"48%"}
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
			<ThemedText size={"xs"}>{parameter.value.replace(/^\s/g, "")}</ThemedText>
			<ThemedText size={"sm"}>{parameter.label.replace(/^\s/g, "")}</ThemedText>
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
	if (desc.type === "image") {
		return (
			<Box color={surface} radius={20}>
				<Image
					source={{ uri: desc.src }}
					style={{ width: sWidth - 30, height: sWidth - 30 }}
					contentFit="fill"
				/>
			</Box>
		);
	}
}
