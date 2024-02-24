import { Platform } from "react-native";

export function scaleByOs(value: number) {
    return Platform.OS === 'ios' ? value * 1.5 : value;
}