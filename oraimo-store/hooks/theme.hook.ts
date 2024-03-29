import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

export function useThemeColor(
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
    props?: { light?: string; dark?: string },
) {
    const theme = useColorScheme() ?? 'light';
    if (!props) {
        return Colors[theme][colorName];
    }
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}


export function useAppTheme() {
    const mode = useColorScheme() ?? 'light';

    return {
        mode,
        theme: Colors[mode],
    };
}

export default function getThemeColors() {
    const theme = useColorScheme() ?? 'light';
    return Colors[theme];
}
