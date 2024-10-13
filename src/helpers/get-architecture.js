import { arch } from "node:os";

import { showErrorMessage } from "./show-error-message.js";

export const getArchitecture = () => {
    try {
        console.info(arch());
    } catch {
        showErrorMessage();
    }
};
