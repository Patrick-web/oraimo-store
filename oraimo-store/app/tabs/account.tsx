import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import ThemedText from "@/components/reusable/ThemedText";
import { useThemeColor } from "@/hooks/theme.hook";
import { Tabs, router } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Account() {
	const insets = useSafeAreaInsets();
	const surface = useThemeColor("surface");
	return (
		<>
			<Tabs.Screen
				options={{
					headerShown: true,
					headerTitle: "Account",
					headerTitleAlign: "left",
					headerShadowVisible: false,
					headerRight: () => (
						<ThemedButton onPress={() => {}} type="text">
							<ThemedIcon name="search" size={"xl"} />
						</ThemedButton>
					),
					headerRightContainerStyle: {
						paddingRight: 15,
					},
				}}
			/>
			<Page scrollable justify="center" height={"100%"}>
				<Box block pa={20} gap={20} radius={30} align="center" color={surface}>
					<Box align="center">
						<ThemedIcon name="user" size={"xxxl"} />
						<ThemedText>You don't have an account</ThemedText>
					</Box>
					<Box direction="row" gap={20}>
						<ThemedButton
							label={"Sign Up"}
							type="secondary"
							flex={1}
							size="sm"
						/>
						<ThemedButton
							label={"Login"}
							type="primary"
							flex={1}
							size="sm"
							onPress={() => {
								router.push("/signin");
							}}
						/>
					</Box>
				</Box>
			</Page>
		</>
	);
}
