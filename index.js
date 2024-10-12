import { createInterface } from "node:readline/promises";
import { argv, stdin, stdout } from "node:process";

import {
    showGoodbye,
    showGreeting,
    getCurrentUserName,
    showCurrentDir,
} from "./src/helpers/index.js";

import { ERROR_MESSAGE, DEFAULT_USER_NAME } from "./src/constants/index.js";

const initFileManagerApp = async () => {
    try {
        const argUserName = argv?.[2] || DEFAULT_USER_NAME;
        const userName = getCurrentUserName(argUserName);

        showGreeting(userName);

        const readlinePromises = createInterface({
            input: stdin,
            output: stdout,
        });

        readlinePromises.on("line", () => {
            showCurrentDir();
        });

        readlinePromises.on("close", () => {
            showGoodbye(userName);
        });
    } catch {
        console.error(ERROR_MESSAGE);
    }
};

await initFileManagerApp();
