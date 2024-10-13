import { cwd, stdout } from "node:process";

import { colorText } from "./color-text.js";
import { showErrorMessage } from "./show-error-message.js";

import { Color } from "../constants/index.js";

export const showCurrentDir = () => {
    try {
        const currentWorkingDirectory = cwd();

        console.log(colorText(`\nYou are currently in ${currentWorkingDirectory} \n`, Color.CYAN));
        // stdout.write("> ");
    } catch {
        showErrorMessage();
    }
};
