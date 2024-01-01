import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { Image, useColorScheme } from "react-native";

import Box from "@/components/reusable/Box";
import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof Feather>["name"];
	color: string;
}) {
	return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				tabBarShowLabel: false,
			}}
			initialRouteName="home"
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
					header: () => {
						return (
							<Box
								block
								align="center"
								pt={10}
								color={Colors[colorScheme ?? "light"].background}
								height={100}
								justify="center"
							>
								<Image
									source={require("../../assets/images/logo.png")}
									style={{ width: 100, height: 50 }}
									resizeMode="contain"
									tintColor={Colors[colorScheme ?? "light"].tint}
								/>
							</Box>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="cart"
				options={{
					title: "Cart",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="shopping-bag" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="wishlist"
				options={{
					title: "Wishlist",
					tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Account",
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
				}}
			/>
		</Tabs>
	);
}
