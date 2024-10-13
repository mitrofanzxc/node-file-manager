import { cwd, stdout } from "node:process";

import { showErrorMessage } from "./show-error-message.js";

export const showCurrentDir = () => {
    try {
        const currentWorkingDirectory = cwd();

        console.info(`\nYou are currently in: ${currentWorkingDirectory}\n`);
        stdout.write("> ");
    } catch {
        showErrorMessage();
    }
};
