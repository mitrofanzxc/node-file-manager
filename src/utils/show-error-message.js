import { colorText } from "./color-text.js";

import { ErrorMessage, Color } from "../constants/index.js";

export const showErrorMessage = (errorMessage = ErrorMessage.OPERATION) => {
    try {
        const coloredText = colorText(errorMessage, Color.RED);

        console.log(coloredText);
    } catch {
        console.error(errorMessage);
    }
};
