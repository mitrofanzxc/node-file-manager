import { createInterface } from "node:readline/promises";
import { chdir, stdin, stdout } from "node:process";
import { homedir } from "node:os";

import {
    showGoodbye,
    showGreeting,
    getCurrentUserName,
    showCurrentDir,
    showErrorMessage,
    userInputHandler,
} from "./src/helpers/index.js";

import { ErrorMessage } from "./src/constants/index.js";

const initFileManagerApp = async () => {
    try {
        const userName = getCurrentUserName();

        showGreeting(userName);
        chdir(homedir());
        showCurrentDir();

        const readlinePromises = createInterface({
            input: stdin,
            output: stdout,
        });

        readlinePromises.on("line", async (input) => {
            await userInputHandler(input, readlinePromises);
            showCurrentDir();
        });

        readlinePromises.on("close", () => {
            showGoodbye(userName);
        });

        readlinePromises.on("error", () => {
            showErrorMessage(ErrorMessage.UNKNOWN);
        });
    } catch {
        showErrorMessage();
    }
};

await initFileManagerApp();
