import Box from "@/components/reusable/Box";
import ThemedButton from "@/components/reusable/Buttons";
import Page from "@/components/reusable/Page";
import ProductsContainer from "@/components/reusable/ProductsContainer";
import { SearchBar } from "@/components/reusable/TextInputs";
import ThemedIcon from "@/components/reusable/ThemedIcon";
import { BASE_URL } from "@/constants/API";
import { useThemeColor } from "@/hooks/theme.hook";
import { ProductItemType } from "@/types/product.types";
import { ReturnWrapper } from "@/types/util.types";
import { useMutation } from "@tanstack/react-query";
import { Stack, router, useLocalSearchParams } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function search() {
	const background = useThemeColor("background");
	const textColor = useThemeColor("text");
	const insets = useSafeAreaInsets();

	const params = useLocalSearchParams<{ query: string }>();

	const [searchQuery, setSearchQuery] = React.useState("");
	const [searchResults, setSearchResults] = React.useState<
		ProductItemType[] | null
	>(null);

	const queryUrl = `${BASE_URL}/search/${encodeURI(params.query)}`;

	const [error, setError] = React.useState<Error | null>(null);

	const searchMutation = useMutation<ReturnWrapper<ProductItemType[]>, Error>({
		mutationFn: () => {
			console.log({ queryUrl });
			return fetch(queryUrl, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			}).then((res) => res.json());
		},
		onSuccess: (data) => {
			console.log({ results: data });
			setSearchResults(data?.data || []);
		},
		onError: (error) => {
			console.log(error);
			setError(error);
		},
	});

	React.useEffect(() => {
		if (params.query) {
			setSearchQuery(params.query);
			searchMutation.mutate();
		}
	}, []);

	return (
		<>
			<Stack.Screen
				options={{
					header: () => (
						<Box
							block
							align="center"
							pt={insets.top + 10}
							pb={5}
							px={15}
							color={background}
							justify="center"
							direction="row"
							gap={20}
						>
							<ThemedButton
								type="text"
								size="sm"
								onPress={() => {
									router.back();
								}}
							>
								<ThemedIcon name="chevron-left" size={25} color="white" />
							</ThemedButton>
							<Box block flex={1}>
								<SearchBar
									placeholder="Search"
									onChangeText={(text) => {
										router.setParams({
											query: text,
										});
									}}
									autoFocus={params.query ? false : true}
									onSubmitEditing={() => searchMutation.mutate()}
									value={params.query}
								/>
							</Box>
							<ThemedButton
								onPress={() => {
									router.back();
								}}
								type="text"
							>
								<ThemedIcon name="shopping-cart" size={22} />
							</ThemedButton>
						</Box>
					),
				}}
			/>
			<Page scrollable px={0} pb={100}>
				{searchResults && (
					<ProductsContainer
						products={searchResults}
						loading={searchMutation.status === "pending"}
					/>
				)}
			</Page>
		</>
	);
}
