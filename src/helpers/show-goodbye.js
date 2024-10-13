import { exit } from "node:process";

import { colorText } from "./color-text.js";
import { showErrorMessage } from "./show-error-message.js";

import { Color } from "../constants/index.js";

export const showGoodbye = (userName) => {
    try {
        const coloredText = colorText(
            `\n\nThank you for using File Manager, ${userName}, goodbye!\n\n`,
            Color.GREEN
        );

        console.log(coloredText);
        exit();
    } catch {
        showErrorMessage();
    }
};
