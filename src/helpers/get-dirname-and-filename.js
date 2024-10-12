import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { ERROR_MESSAGE } from "../constants/index.js";

export const getDirnameAndFilename = (metaUrl) => {
    try {
        const __filename = fileURLToPath(metaUrl);
        const __dirname = dirname(__filename);

        return { __filename, __dirname };
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
