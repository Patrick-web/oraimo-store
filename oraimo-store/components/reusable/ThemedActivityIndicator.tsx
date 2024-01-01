import Colors from "@/constants/Colors";
import React from "react";
import {
	ActivityIndicator,
	ActivityIndicatorProps,
	useColorScheme,
} from "react-native";

export default function ThemedActivityIndicator(props: ActivityIndicatorProps) {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	return <ActivityIndicator color={theme.text} {...props} />;
}
