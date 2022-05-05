const fs = require("fs");
const { Console } = require("console");
const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });
const intValue = 5;
const floatValue = 3.14;
const strValue = "hahaha";
logger.log("count: %d %f %s", intValue, floatValue, strValue);
logger.error("count: %d %f %s", intValue, floatValue, strValue);
