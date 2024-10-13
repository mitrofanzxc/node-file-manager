import { colorText } from "./color-text.js";
import { showErrorMessage } from "./show-error-message.js";

import { Colors } from "../constants/index.js";

export const showGreeting = (userName) => {
    try {
        const coloredText = colorText(`Welcome to the File Manager, ${userName}!`, Colors.GREEN);

        console.log(coloredText);
    } catch {
        showErrorMessage();
    }
};
