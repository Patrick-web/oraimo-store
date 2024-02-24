import { useThemeColor } from "@/hooks/theme.hook";
import { MainCollectionType } from "@/types/collection.types";
import { View } from "moti";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import Box from "../reusable/Box";
import ThemedText from "../reusable/ThemedText";

export default function (collection: MainCollectionType) {
	return (
		<Box
			key={collection.name}
			justify="center"
			align="center"
			radius={20}
			overflow="hidden"
		>
			<Animated.Image
				source={{ uri: collection.image }}
				style={{ width: "100%", height: 100 }}
				sharedTransitionTag={collection.image}
				resizeMode="cover"
			/>
			<View
				style={[
					StyleSheet.absoluteFillObject,
					{
						backgroundColor: "rgba(0,0,0,0.1)",
						justifyContent: "flex-end",
						padding: 10,
					},
				]}
			>
				<ThemedText color={"white"} weight="bold">
					{collection.name}
				</ThemedText>
			</View>
		</Box>
	);
}

export function OtherCollectionCardSkeleton() {
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
