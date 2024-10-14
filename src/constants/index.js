export const ErrorMessage = {
    OPERATION: "Operation failed.",
    UNKNOWN: "Unknown error has occured.",
    INPUT: "Invalid input. Please check your cli command.",
    HASH_INPUT:
        "Hash invalid input. Please check your path to the file taking into account the current directory.",
    HASH_OPERATION:
        "Hash operation failed. Please check your path to the file taking into account the current directory.",
    COMPRESS_INPUT:
        "Compress invalid input. Please check your path to the file taking into account the current directory.",
    COMPRESS_OPERATION:
        "Compress operation failed. Please check your path to the file taking into account the current directory.",
    DECOMPRESS_INPUT:
        "Decompress invalid input. Please check your path to the file taking into account the current directory.",
    DECOMPRESS_OPERATION:
        "Decompress operation failed. Please check your path to the file taking into account the current directory.",
    ZIP_INPUT:
        "Zip invalid input. Please check your path to the file taking into account the current directory.",
    ZIP_OPERATION:
        "Zip operation failed. Please check your path to the file taking into account the current directory.",
    BASIC_INPUT:
        "Basic invalid input. Please check your path to the file taking into account the current directory.",
    BASIC_OPERATION:
        "Basic operation failed. Please check your path to the file taking into account the current directory.",
    OS_INPUT:
        "OS invalid input. Please check your path to the file taking into account the current directory.",
    OS_OPERATION:
        "OS operation failed. Please check your path to the file taking into account the current directory.",
    NAVIGATION_INPUT:
        "Navigation invalid input. Please check your path to the file taking into account the current directory.",
    NAVIGATION_OPERATION:
        "Navigation operation failed. Please check your path to the file taking into account the current directory.",
};

export const DEFAULT_USER_NAME = "Username";
export const ALGORITHM = "sha256";
export const ENCODING = "hex";
export const GHZ = "GHz";

export const Color = {
    WHITE: "\u001b[37m",
    RESET: "\u001b[0m",
    GREEN: "\u001b[32m",
    RED: "\u001b[31m",
    YELLOW: "\u001b[33m",
    BLUE: "\u001b[34m",
    CYAN: "\u001b[36m",
};

export const Separator = {
    EQUAL: "=",
};

export const FileType = {
    FILE: "file",
    DIRECTORY: "directory",
};

export const OperationType = {
    OS: "os",
    HASH: "hash",
    EXIT: ".exit",
};

export const BasicOperation = {
    CAT: "cat",
    ADD: "add",
    RN: "rn",
    CP: "cp",
    MV: "mv",
    RM: "rm",
};

export const NavigationOperation = {
    UP: "up",
    CD: "cd",
    LS: "ls",
};

export const ZipOperation = {
    COMPRESS: "compress",
    DECOMPRESS: "decompress",
};
