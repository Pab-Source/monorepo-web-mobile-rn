/* eslint-disable @typescript-eslint/no-var-requires */

const { lessVariables } = require("./lessVariables");
const fs = require("fs");

const outputLessFiles = `./src/styles`;

fs.mkdirSync(outputLessFiles, { recursive: true });
fs.writeFileSync(`${outputLessFiles}/generated-variables-from-theme.less`, lessVariables);

console.log("LESS variables successfully recreated from themes");

fs.copyFile(
    `${outputLessFiles}/generated-variables-from-theme.less`,
    "../dist",
    fs.constants.COPYFILE_FICLONE_FORCE,
    () => {
        console.log("LESS variables successfully copy in dist");
    },
);
