const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = 'trace';

module.exports = logger;