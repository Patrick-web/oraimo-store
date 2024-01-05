import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function RootPage() {
	useEffect(() => {
		setTimeout(() => {
			router.push("/tabs");
		}, 1000);
	}, []);
	return (
		<View>
			<Text>RootPage</Text>
		</View>
	);
}
