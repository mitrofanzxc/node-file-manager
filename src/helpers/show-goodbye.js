import { exit } from "node:process";

import { ERROR_MESSAGE } from "../constants/index.js";

export const showGoodbye = (userName) => {
    try {
        console.log(`\n\nThank you for using File Manager, ${userName}, goodbye!\n\n`);
        exit();
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
