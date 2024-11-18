import { colorText } from "./color-text.js";
import { showErrorMessage } from "./show-error-message.js";

import { Color } from "../constants/index.js";

export const showGreeting = (userName) => {
    try {
        const coloredText = colorText(`Welcome to the File Manager, ${userName}!`, Color.GREEN);

        console.log(coloredText);
    } catch {
        showErrorMessage();
    }
};
