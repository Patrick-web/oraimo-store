import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { router, usePathname } from "expo-router";
import React, { ReactNode, forwardRef, useImperativeHandle } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Box, { BoxProps } from "./Box";
import ThemedButton from "./Buttons";
import ThemedIcon from "./ThemedIcon";
import ThemedText from "./ThemedText";

const Page = forwardRef(
	(
		{
			children,
			scrollable = false,
			header,
			headerComponent,
			disableHeader = false,
			...props
		}: PageProps,
		ref
	) => {
		const scrollRef = React.useRef<ScrollView>(null);

		function scrollToTop() {
			scrollRef.current?.scrollTo({ y: 0, animated: true });
		}

		function scrollToBottom() {
			scrollRef.current?.scrollToEnd({ animated: true });
		}

		useImperativeHandle(ref, () => ({
			scrollToTop,
			scrollToBottom,
		}));

		const backgroundColor = useThemeColor("background");
		const path = usePathname();
		let splitPath = path.split("/");
		splitPath.shift();

		return (
			<SafeAreaView>
				{disableHeader ? (
					<Box color={backgroundColor} />
				) : (
					<Box
						block
						justify="space-between"
						align="center"
						color={backgroundColor}
					>
						{headerComponent ? (
							headerComponent
						) : (
							<Box
								direction="row"
								align="center"
								justify="space-between"
								gap={10}
								block
								px={15}
								py={15}
							>
								<ThemedButton
									type="text"
									size="sm"
									onPress={() => {
										router.back();
									}}
								>
									<ThemedIcon name="chevron-left" size={25} />
								</ThemedButton>
								<ThemedText size="lg" weight="bold">
									{header?.title}
								</ThemedText>
								<ThemedButton
									type="text"
									size="sm"
									onPress={() => {
										router.back();
									}}
								>
									<ThemedIcon name="search" size={25} />
								</ThemedButton>
							</Box>
						)}
					</Box>
				)}
				{scrollable ? (
					<Box
						color={backgroundColor}
						style={{ minHeight: "100%" }}
						width={sWidth}
						px={15}
						pb={header ? 120 : 30}
						{...props}
					>
						<ScrollView
							contentContainerStyle={{
								gap: props.gap,
							}}
						>
							{children}
						</ScrollView>
					</Box>
				) : (
					<Box
						width={sWidth}
						color={backgroundColor}
						style={{ minHeight: "100%" }}
						px={15}
						pb={header ? 120 : 30}
						{...props}
					>
						{children}
					</Box>
				)}
			</SafeAreaView>
		);
	}
);

export default Page;

interface PageProps extends BoxProps {
	children: ReactNode;
	scrollable?: boolean;
	headerComponent?: ReactNode;
	header?: {
		title: string;
		disableBackButton?: boolean;
		rightComponent?: ReactNode;
	} | null;
	disableHeader?: boolean;
}
