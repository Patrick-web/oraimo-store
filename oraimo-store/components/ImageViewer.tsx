import { sWidth } from "@/constants/Window";
import { Image } from "expo-image";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Zoom } from "react-native-reanimated-zoom";
import Box from "./reusable/Box";
import ThemedButton from "./reusable/Buttons";
import ThemedModal from "./reusable/ThemedModal";
const containerGap = 220;
const mainImageHeight = sWidth + containerGap;
const imagesHeight = sWidth / 3.6;
const totalHeight = mainImageHeight + imagesHeight;

const ImageViewer = gestureHandlerRootHOC(
	({
		images,
		visible,
		close,
		selectedIndex,
	}: {
		images: string[];
		visible: boolean;
		selectedIndex?: number;
		close: () => void;
	}) => {
		return (
			<ThemedModal visible={visible} close={close} position="bottom">
				<Box height={totalHeight}>
					<Viewer images={images} defaultSelectedIndex={selectedIndex} />
				</Box>
			</ThemedModal>
		);
	}
);

const Viewer = gestureHandlerRootHOC(
	({
		images,
		defaultSelectedIndex = 0,
	}: {
		images: string[];
		defaultSelectedIndex?: number;
	}) => {
		const [selectedImageIndex, setSelectedImageIndex] =
			useState(defaultSelectedIndex);

		return (
			<Box align="center" justify="space-between" height={"100%"}>
				<Box height={mainImageHeight}>
					{images.map((image, index) => (
						<Box key={image}>
							{selectedImageIndex === index && (
								<Zoom>
									<Image
										source={{ uri: images[selectedImageIndex] }}
										style={{
											width: sWidth - 60,
											height: mainImageHeight,
										}}
										contentFit="contain"
									/>
								</Zoom>
							)}
						</Box>
					))}
				</Box>
				<Box height={imagesHeight} block>
					<ScrollView horizontal pagingEnabled snapToStart>
						{images.length > 1 && (
							<Box direction="row" gap={10}>
								{images.map((image, index) => (
									<ThemedButton
										type="text"
										onPress={() => {
											setSelectedImageIndex(index);
										}}
										key={image}
									>
										<Image
											source={{ uri: image }}
											style={{
												width: imagesHeight,
												height: imagesHeight,
												borderRadius: selectedImageIndex === index ? 15 : 0,
											}}
											contentFit="contain"
										/>
									</ThemedButton>
								))}
							</Box>
						)}
					</ScrollView>
				</Box>
			</Box>
		);
	}
);

export default ImageViewer;
