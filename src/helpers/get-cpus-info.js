import { cpus } from "node:os";

import { ERROR_MESSAGE, GHZ } from "../constants/index.js";

export const getCpusInfo = () => {
    try {
        const cpusInfo = cpus().map(({ model, speed }) => ({
            model,
            speed: `${(speed / 1000).toFixed(2)}${GHZ}`,
        }));

        console.table(cpusInfo);
    } catch {
        console.error(ERROR_MESSAGE);
    }
};
