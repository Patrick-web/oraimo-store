import { useThemeColor } from "@/hooks/theme.hook";
import { MainCollectionType } from "@/types/collection.types";
import { Image } from "react-native";
import Box from "../reusable/Box";
import ThemedText from "../reusable/ThemedText";

export default function MainCollectionCard(collection: MainCollectionType) {
	return (
		<Box
			key={collection.name}
			justify="center"
			align="center"
			radius={20}
			overflow="hidden"
		>
			<Image
				source={{ uri: collection.image }}
				style={{ width: "100%", height: 100 }}
				resizeMode="cover"
			/>
			<ThemedText
				style={{
					position: "absolute",
					top: 10,
					left: 10,
				}}
				color={"white"}
				weight="bold"
			>
				{collection.name}
			</ThemedText>
		</Box>
	);
}

export function MainCollectionCardSkeleton() {
	const background = useThemeColor("surface");
	return (
		<Box
			justify="center"
			align="center"
			width={"48%"}
			height={100}
			radius={20}
			overflow="hidden"
			color={background}
		/>
	);
}
