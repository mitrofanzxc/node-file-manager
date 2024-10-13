import { Colors } from "../constants/index.js";

export const colorText = (text = "", color = Colors.WHITE) => {
    try {
        const colorToPrint = Colors?.[color] || Colors.WHITE;

        return `${colorToPrint}${text}${Colors.RESET}`;
    } catch {
        return text;
    }
};
