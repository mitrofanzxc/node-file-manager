import { join } from "node:path";
import { cwd } from "node:process";
import { createReadStream } from "node:fs";
const { createHash } = await import("node:crypto");

import { ErrorMessage, ALGORITHM, ENCODING } from "../../constants/index.js";
import { showErrorMessage } from "../show-error-message.js";

export const calcHash = async (args) => {
    try {
        const [filePath] = args;
        const currentWorkingDirectory = cwd();
        const filePathToCalcHash = join(currentWorkingDirectory, filePath);

        const readStream = createReadStream(filePathToCalcHash);
        const hash = createHash(ALGORITHM);

        readStream.pipe(hash).on("finish", () => {
            const encodedHash = hash.digest(ENCODING);

            console.log(`SHA256 hash for file: ${encodedHash}`);
        });

        readStream.on("error", () => {
            showErrorMessage(ErrorMessage.HASH_INPUT);
        });
    } catch {
        showErrorMessage(ErrorMessage.HASH_OPERATION);
    }
};
