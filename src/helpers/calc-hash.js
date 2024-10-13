import { join } from "node:path";
import { cwd } from "node:process";
import { createReadStream } from "node:fs";
const { createHash } = await import("node:crypto");

import { errorHandler } from "./error-handler.js";

import { ErrorMessage, ALGORITHM, ENCODING } from "../constants/index.js";

export const calculateHash = errorHandler(async (fileArguments) => {
    const [filePath] = fileArguments;
    const currentWorkingDirectory = cwd();
    const filePathToCalcHash = join(currentWorkingDirectory, filePath);

    const readStream = createReadStream(filePathToCalcHash);
    const hash = createHash(ALGORITHM);
    const encodedHash = hash.digest(ENCODING);

    readStream.pipe(hash).on("finish", () => {
        console.log(`SHA256 hash for file: ${encodedHash}`);
    });
}, ErrorMessage.HASH);
