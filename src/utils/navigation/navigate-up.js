import { dirname } from "node:path";
import { cwd, chdir } from "node:process";

import { ErrorMessage } from "../../constants/index.js";

export const navigateUp = () => {
    try {
        const currentWorkingDirectory = cwd();
        const parentWorkingDirectory = dirname(currentWorkingDirectory);

        chdir(parentWorkingDirectory);
    } catch {
        printErrorText(ErrorMessage.NAVIGATION_UP);
    }
};
