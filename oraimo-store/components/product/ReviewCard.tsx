import { useThemeColor } from "@/hooks/theme.hook";
import { FullProduct } from "@/types/product.types";
import { ReviewStars } from "../ReviewStars";
import Box from "../reusable/Box";
import ThemedText from "../reusable/ThemedText";

export default function ReviewCard({
	review,
}: {
	review: FullProduct["firstReviews"][0];
}) {
	const textColor = useThemeColor("text");
	const surface = useThemeColor("surface");
	return (
		<Box color={surface} radius={15} pa={15} gap={5} block>
			<ThemedText size="xs" style={{ opacity: 0.7 }}>
				{review.date}
			</ThemedText>
			<ReviewStars rating={Number(review.rating)} />
			<Box>
				<ThemedText weight="bold">{review.title}</ThemedText>
				<ThemedText size="sm">{review.content}</ThemedText>
			</Box>
			<ThemedText size="xs">by {review.user}</ThemedText>
		</Box>
	);
}
