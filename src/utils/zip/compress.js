import { join } from "path";
import { cwd } from "node:process";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream/promises";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const compress = async (args) => {
    try {
        const currentWorkingDirectory = cwd();
        const [fileName, destinationFileName] = args;
        const filePathToCompress = join(currentWorkingDirectory, fileName);
        const compressedFilePath = join(currentWorkingDirectory, destinationFileName);

        const gzip = createBrotliCompress();
        const source = createReadStream(filePathToCompress);
        const destination = createWriteStream(compressedFilePath);

        await pipeline(source, gzip, destination);
    } catch {
        showErrorMessage(ErrorMessage.ZIP_OPERATION);
    }
};
