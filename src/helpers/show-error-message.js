import { colorText } from "./color-text.js";

import { ERROR_MESSAGE, Colors } from "../constants/index.js";

export const showErrorMessage = (errorMessage = ERROR_MESSAGE) => {
    try {
        const coloredText = colorText(errorMessage, Colors.RED);

        console.log(coloredText);
    } catch {
        console.error(errorMessage);
    }
};
