import { join, resolve } from "path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

import { showErrorMessage } from "../show-error-message.js";

import { ErrorMessage } from "../../constants/index.js";

export const copyFile = async (currentWorkingDirectory, args) => {
    try {
        const [fileNameToCopy, destinationFolderName] = args;

        if (!fileNameToCopy || !destinationFolderName) {
            showErrorMessage(ErrorMessage.BASIC_OPERATION);

            return;
        }

        const filePathToCopy = join(currentWorkingDirectory, fileNameToCopy);
        const absoluteDestinationFolderPath = resolve(
            currentWorkingDirectory,
            destinationFolderName
        );
        const destinationFilePath = join(absoluteDestinationFolderPath, fileNameToCopy);

        const readStream = createReadStream(filePathToCopy, { encoding: "utf8" });
        const writeStream = createWriteStream(destinationFilePath);

        await pipeline(readStream, writeStream);
    } catch {
        showErrorMessage(ErrorMessage.BASIC_OPERATION);
    }
};
