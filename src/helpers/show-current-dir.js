import { cwd, stdout } from "node:process";

import { ERROR_MESSAGE } from "../constants/index.js";

export const showCurrentDir = () => {
    try {
        const currentWorkingDirectory = cwd();

        console.info(`\nYou are currently in: ${currentWorkingDirectory}\n`);
        stdout.write("> ");
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
