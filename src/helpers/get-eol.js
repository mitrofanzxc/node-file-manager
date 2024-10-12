import { EOL } from "node:os";

import { ERROR_MESSAGE } from "../constants/index.js";

export const getEol = () => {
    try {
        const eolInfo = JSON.stringify(EOL);

        console.log(eolInfo);
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
