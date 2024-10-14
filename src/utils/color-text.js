import { Color } from "../constants/index.js";

export const colorText = (text = "", color = Color.WHITE) => {
    try {
        const colorToPrint = color || Color.WHITE;

        return `${colorToPrint}${text}${Color.RESET}`;
    } catch {
        return text;
    }
};
