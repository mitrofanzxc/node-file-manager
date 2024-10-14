import { join } from "path";
import { cwd } from "node:process";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const decompress = async (decompressArguments) => {
    try {
        const currentWorkingDirectory = cwd();
        const [fileName, destinationFileName] = decompressArguments;
        const filePathToDecompress = join(currentWorkingDirectory, fileName);
        const decompressedFilePath = join(currentWorkingDirectory, destinationFileName);

        const unzip = createBrotliDecompress();
        const source = createReadStream(filePathToDecompress);
        const destination = createWriteStream(decompressedFilePath);

        await pipeline(source, unzip, destination);
    } catch {
        showErrorMessage(ErrorMessage.ZIP_OPERATION);
    }
};
