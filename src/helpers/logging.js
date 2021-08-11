const getTimeStamp = () => {
  return new Date().toISOString();
};

const info = (namespace, message, object) => {
  object
    ? console.info(
        `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
        object
      )
    : console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
};

const warn = (namespace, message, object) => {
  object
    ? console.warn(
        `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
        object
      )
    : console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
};

const error = (namespace, message, object) => {
  object
    ? console.error(
        `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
        object
      )
    : console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
};

const debug = (namespace, message, object) => {
  object
    ? console.debug(
        `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
        object
      )
    : console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
};

module.exports = {
  info,
  warn,
  error,
  debug
};
