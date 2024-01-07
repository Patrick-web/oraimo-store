import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { FullProduct } from "@/types/product.types";
import { Image } from "expo-image";
import React from "react";
import Box from "../reusable/Box";
import ThemedText from "../reusable/ThemedText";

export default function DescriptionItem({
	desc,
}: {
	desc: FullProduct["description"][0];
}) {
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
