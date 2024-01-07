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
	(
		{
			children,
			scrollable = false,
			header,
			headerComponent,
			disableHeader = false,
			onScroll,
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

		const insets = useSafeAreaInsets();

		return (
			<>
				{scrollable ? (
					<Box
						color={backgroundColor}
						style={{ minHeight: "100%" }}
						width={sWidth}
						px={15}
						pb={header ? 120 : 30}
						pt={5}
						{...props}
					>
						<Animated.ScrollView
							contentContainerStyle={{
								gap: props.gap,
							}}
							ref={scrollRef}
							onScroll={onScroll}
							// throttle scroll events
							scrollEventThrottle={24}
						>
							{children}
						</Animated.ScrollView>
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
