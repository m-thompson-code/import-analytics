import { writeFileSync } from "fs";

const errors: unknown[] = [];

export const getErrors = () => {
    return [ ...errors ];
}

export const storeError = (error: unknown) => {
    errors.push(error);
}

export const writeErrorsJson = () => {
    writeFileSync(__dirname + "/../errors.json", JSON.stringify(errors.map(error => {
        if (error instanceof Error) {
            return error.message;
        }

        return error;
    }), null, 2));
}
