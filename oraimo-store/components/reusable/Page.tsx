import Colors from "@/constants/Colors";
import { sWidth } from "@/constants/Window";
import React, { ReactNode, forwardRef, useImperativeHandle } from "react";
import { ScrollView, useColorScheme } from "react-native";
import Box, { BoxProps } from "./Box";

const Page = forwardRef(
	({ children, scrollable = false, ...props }: PageProps, ref) => {
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

		const colorScheme = useColorScheme();
		const theme = Colors[colorScheme ?? "light"];

		return (
			<>
				{scrollable ? (
					<ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
						<Box
							width={sWidth}
							flex={1}
							color={theme.background}
							height={"100%"}
							{...props}
						>
							{children}
						</Box>
					</ScrollView>
				) : (
					<Box
						width={sWidth}
						color={theme.background}
						style={{ minHeight: "100%" }}
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

interface PageProps extends BoxProps {
	children: ReactNode;
	scrollable?: boolean;
	headerComponent?: ReactNode;
	header?: {
		title: string;
		disableBackButton?: boolean;
		rightComponent?: ReactNode;
	};
	disableHeader?: boolean;
}
