import { useThemeColor } from "@/hooks/theme.hook";
import { FontAwesome } from "@expo/vector-icons";
import Box from "./reusable/Box";

export function ReviewStars({
	rating,
	size,
	color,
}: {
	rating: number;
	size?: number;
	color?: string;
}) {
	const starColor = color ?? useThemeColor("text");
	const starSize = size ?? 15;

	const stars = [];

	for (let i = 0; i < 5; i++) {
		if (i < Math.trunc(rating)) {
			stars.push(
				<FontAwesome key={i} name="star" size={size} color={starColor} />
			);
		} else {
			stars.push(
				<FontAwesome key={i} name="star-o" size={size} color={starColor} />
			);
		}
	}

	return (
		<Box gap={5} direction="row">
			{stars}
		</Box>
	);
}
