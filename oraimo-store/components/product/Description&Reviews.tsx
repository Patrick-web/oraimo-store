import { useThemeColor } from "@/hooks/theme.hook";
import { FullProduct } from "@/types/product.types";
import { animateLayout } from "@/utils/animation.util";
import React, { useState } from "react";
import Box from "../reusable/Box";
import ThemedButton from "../reusable/Buttons";
import DescriptionItem from "./DescriptionItem";
import ReviewCard from "./ReviewCard";

export default function DescriptionAndReviews({
	description,
	reviews,
}: {
	description: FullProduct["description"];
	reviews: FullProduct["firstReviews"];
}) {
	const [activeTab, setActiveTab] = useState<"description" | "reviews">(
		"description"
	);

	function switchTab(tab: "description" | "reviews") {
		animateLayout();
		setActiveTab(tab);
	}
	const color = useThemeColor("text");

	return (
		<Box gap={10}>
			<Box>
				<Box direction="row" gap={10}>
					<ThemedButton
						type="text"
						size="sm"
						onPress={() => {
							switchTab("description");
						}}
						label={"Description"}
						style={{
							opacity: activeTab === "description" ? 1 : 0.5,
						}}
						py={0}
					/>
					<ThemedButton
						type="text"
						size="sm"
						onPress={() => {
							switchTab("reviews");
						}}
						label={"Reviews"}
						style={{
							opacity: activeTab === "reviews" ? 1 : 0.5,
						}}
						py={0}
					/>
				</Box>
				<Box
					height={2}
					width={110}
					color={color}
					style={{
						transform: [{ translateX: activeTab === "description" ? 0 : 112 }],
					}}
				/>
			</Box>
			{activeTab === "description" && (
				<Box gap={10} width={activeTab === "description" ? "100%" : "0%"}>
					{description.map((desc, index) => (
						<DescriptionItem key={index} desc={desc} />
					))}
				</Box>
			)}
			{activeTab === "reviews" && (
				<Box
					gap={20}
					width={activeTab === "reviews" ? "100%" : "0%"}
					align="center"
				>
					{reviews.map((review) => (
						<ReviewCard key={review.user} review={review} />
					))}
				</Box>
			)}
		</Box>
	);
}
