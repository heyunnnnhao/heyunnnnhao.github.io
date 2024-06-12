const path = require("path");

const resolvePath = (dirname) => path.resolve(process.cwd(), dirname);

module.exports = {
  resolvePath,
};
