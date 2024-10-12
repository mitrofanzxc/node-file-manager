import { arch } from "node:os";

import { ERROR_MESSAGE } from "../constants/index.js";

export const getArchitecture = () => {
    try {
        console.info(arch());
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
