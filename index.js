import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { showGoodbye } from "./src/utils/show-goodbye.js";
import { showGreeting } from "./src/utils/show-greeting.js";
import { getCurrentUserName } from "./src/utils/os/get-current-username.js";
import { showCurrentDir } from "./src/utils/show-current-dir.js";
import { showErrorMessage } from "./src/utils/show-error-message.js";
import { userInputHandler } from "./src/utils/handlers/user-input-handler.js";
import { navigateToHomeDir } from "./src/utils/navigation/navigate-to-home-dir.js";

import { ErrorMessage } from "./src/constants/index.js";

const initFileManagerApp = async () => {
    try {
        const userName = getCurrentUserName();

        showGreeting(userName);
        navigateToHomeDir();
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
