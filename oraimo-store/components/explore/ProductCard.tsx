import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { ProductItemType } from "@/types/product.types";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image } from "react-native";
import Box from "../reusable/Box";
import ThemedButton from "../reusable/Buttons";
import ThemedText from "../reusable/ThemedText";

export const productImageSize = Math.min(sWidth / 2.3, 300);

export default function ProductCard({ product }: { product: ProductItemType }) {
	function generateStars() {
		const stars = [];

		const color = useThemeColor("text");

		for (let i = 0; i < 5; i++) {
			if (i < Math.trunc(product.rating)) {
				stars.push(<FontAwesome key={i} name="star" size={15} color={color} />);
			} else {
				stars.push(
					<FontAwesome key={i} name="star-o" size={15} color={color} />
				);
			}
		}

		return stars;
	}

	const background = useThemeColor("surface");

	return (
		<ThemedButton
			type="text"
			onPress={() => {
				router.push({
					pathname: "/tabs/explore/product",
					params: {
						preview: JSON.stringify(product),
					},
				});
			}}
		>
			<Box width={productImageSize} py={10} gap={5}>
				<Box color={background} radius={20}>
					<Image
						source={{ uri: product.image }}
						style={{ width: productImageSize, height: productImageSize }}
						resizeMode="cover"
					/>
				</Box>
				<ThemedText size={"xs"} numberOfLines={2}>
					{product.name}
				</ThemedText>
				<ThemedText size={"sm"} weight={"bold"}>
					Ksh {product.price}
				</ThemedText>
				{/* Rating starts */}
				<Box direction="row" gap={5} align="center">
					{generateStars()}
					<ThemedText size={"sm"}>({product.numberOfReviews})</ThemedText>
				</Box>
			</Box>
		</ThemedButton>
	);
}

export function ProductCardSkeleton() {
	const background = useThemeColor("surface");

	return (
		<Box gap={8} width={productImageSize}>
			<Box
				width={productImageSize}
				height={productImageSize}
				color={background}
				radius={10}
			/>
			<Box block height={18} color={background} radius={5} />
			<Box width={"80%"} height={18} color={background} radius={5} />
			<Box width={"50%"} height={18} color={background} radius={5} />
		</Box>
	);
}
