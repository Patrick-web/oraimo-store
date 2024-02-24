import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import { Tabs } from "expo-router";
import React from "react";

export default function Cart() {
	return (
		<>
			<Tabs.Screen
				options={{
					headerShown: true,
					headerTitle: "Shopping Cart",
					headerTitleAlign: "left",
					headerShadowVisible: false,
					headerRight: () => (
						<ThemedButton onPress={() => {}} type="text">
							<ThemedIcon name="search" size={"xl"} />
						</ThemedButton>
					),
					headerRightContainerStyle: { paddingRight: 15 },
				}}
			/>
			<Page scrollable>{/* <CartList /> */}</Page>
		</>
	);
}
