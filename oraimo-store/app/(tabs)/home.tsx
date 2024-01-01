import { StyleSheet } from "react-native";

import Page from "@/components/reusable/Page";
import { SearchBar } from "@/components/reusable/TextInputs";

export default function TabOneScreen() {
	return (
		<Page px={15}>
			<SearchBar />
		</Page>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
