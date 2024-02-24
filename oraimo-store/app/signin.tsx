import Box from "@/components/reusable/Box";
import Page from "@/components/reusable/Page";
import Colors from "@/constants/Colors";
import getThemeColors, { useThemeColor } from "@/hooks/theme.hook";
import userStore from "@/store/user.store";
import { Stack } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

function injectedJavaScript(colors: typeof Colors.dark | typeof Colors.light) {
	return `
            const css = \`
              	body, div, form {
                    background-color: ${colors.background} !important;
                }

                header, footer, h4, p {
                    display: none;
                    pointer-events: none;
                }
				h3, form {
					background-color: ${colors.background} !important;
				}
				p {
					font-size: 16px !important;
					color: white !important;
					font-weight: inherit !important;
				}
                label {
                    font-size: 18px !important;
                    color: ${colors.text} !important;
                }
                input {
                    border-radius: 20px !important;
                    padding-top: 15px !important;
                    padding-bottom: 15px !important;
                    padding-left: 15px !important;
                    background-color: ${colors.surface} !important;
                    border: none !important;
                    color: ${colors.text} !important;
					height: auto !important;
					font-size: 18px !important;
					line-height: normal !important;
                }

                [type='submit']{
                    background-color: ${colors.primary} !important;
					font-size: 16px !important;
					font-weight: 600 !important;
                }

                form > div:nth-child(5) > span > a {
                    transform: translateY(20px) translateX(0px);
                }

                form > p:nth-child(8){
                    display: none;
                    pointer-events: none;
                }

                .signin-with {
                    display: none !important;
                }
            \`;

            const style = document.createElement('style');
            style.innerHTML = css;
            document.head.appendChild(style);

			// Get the native version of the setItem function
			const originalSetItem = localStorage.setItem;
			// Override the setItem function with your custom function
			localStorage.setItem = function(key, value) {
				const data = {}
				data[key] = value;
				window.ReactNativeWebView.postMessage(JSON.stringify(data));

				// originalSetItem.call(localStorage, key, value);
			};
        `;
}

export default function SignIn() {
	const themeColors = getThemeColors();

	const [loadingProgress, setLoadingProgress] = React.useState(0);
	const [loading, setLoading] = React.useState(true);

	const [token, setToken] = React.useState("");

	const onWebviewMessage = (event: WebViewMessageEvent) => {
		// Parse the data received from the WebView
		const data = JSON.parse(event.nativeEvent.data);
		// Now you can use the data in your app
		console.log(data);
		if (data.token) {
			setToken(data.token);
			userStore.getState().setToken(data.token);
		}
		if (data._grecaptcha) {
			userStore.getState().setRecaptchaToken(data._grecaptcha);
		}
	};

	return (
		<>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitle: "Sign In",
					headerTitleAlign: "center",
					headerShadowVisible: false,
				}}
			/>
			<Page scrollable justify="center">
				{loadingProgress < 1 && (
					<Box gap={20}>
						<ActivityIndicator color={themeColors.text} />
						<ProgressIndicator progress={loadingProgress} />
					</Box>
				)}
				<Box block height={loading ? "0%" : "100%"}>
					<WebView
						source={{ uri: "https://ke.oraimo.com/auth/sign-in" }}
						style={{ flex: 1 }}
						onLoadProgress={({ nativeEvent }) => {
							setLoadingProgress(nativeEvent.progress);
						}}
						injectedJavaScript={injectedJavaScript(themeColors)}
						onLoadStart={() => {
							setLoading(true);
						}}
						onLoadEnd={() => {
							setLoading(false);
						}}
						onMessage={onWebviewMessage}
					/>
				</Box>
			</Page>
		</>
	);
}

function ProgressIndicator({ progress }: { progress: number }) {
	const surfaceColor = useThemeColor("surface");
	const textColor = useThemeColor("text");
	return (
		<Box height={2} color={surfaceColor} overflow={"hidden"}>
			<Box width={`${progress * 100}%`} height={2} color={textColor} />
		</Box>
	);
}
