import { sWidth } from "@/constants/Window";
import { useThemeColor } from "@/hooks/theme.hook";
import { usePathname } from "expo-router";
import React, { ReactNode, forwardRef, useImperativeHandle } from "react";
import {
	Animated,
	NativeScrollEvent,
	NativeSyntheticEvent,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Box, { BoxProps } from "./Box";

const Page = forwardRef(
	({ children, scrollable = false, onScroll, ...props }: PageProps, ref) => {
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

		const insets = useSafeAreaInsets();

		return (
			<>
				{scrollable ? (
					<Box style={{ minHeight: "100%" }} flex={1}>
						<Animated.ScrollView
							contentContainerStyle={{
								backgroundColor: "red",
								minHeight: "100%",
							}}
							style={{
								width: sWidth,
							}}
							ref={scrollRef}
							onScroll={onScroll}
							scrollEventThrottle={24}
						>
							<Box
								color={backgroundColor}
								width={"100%"}
								px={15}
								pb={insets.bottom}
								pt={5}
								{...props}
								height={"100%"}
							>
								{children}
							</Box>
						</Animated.ScrollView>
					</Box>
				) : (
					<Box
						width={sWidth}
						color={backgroundColor}
						style={{ minHeight: "100%" }}
						px={15}
						pb={insets.bottom}
						flex={1}
						{...props}
					>
						{children}
					</Box>
				)}
			</>
		);
	}
);

export default Page;

// <Page
// 		gap={40}
// 		scrollable
// 		onScroll={Animated.event(
// 			[{ nativeEvent: { contentOffset: { y: scrollY } } }],
// 			{ useNativeDriver: false }
// 		)}
// 	></Page>
interface PageProps extends BoxProps {
	children: ReactNode;
	scrollable?: boolean;
	onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
