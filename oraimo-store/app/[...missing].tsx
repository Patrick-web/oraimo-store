import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import Box from "@/components/reusable/Box";
import Page from "@/components/reusable/Page";
import ThemedText from "@/components/reusable/ThemedText";

export default function NotFoundScreen() {
	return (
		<Page>
			<Stack.Screen options={{ title: "Oops!" }} />
			<Box>
				<ThemedText style={styles.title}>This screen doesn't exist.</ThemedText>

				<Link href="/" style={styles.link}>
					<ThemedText style={styles.linkText}>Go to home screen!</ThemedText>
				</Link>
			</Box>
		</Page>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: "#2e78b7",
	},
});
