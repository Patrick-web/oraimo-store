import { Stack } from "expo-router";
import React from "react";

export default function ExploreLayout() {
	return (
		<Stack
			initialRouteName="home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="home" />
			<Stack.Screen name="collection" />
		</Stack>
	);
}
