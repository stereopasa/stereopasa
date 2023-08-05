const baseConfig = require('@stereopasa/prettier-config');

/** @type {import("prettier").Options} */
module.exports = {
  ...baseConfig,
  plugins: [...(baseConfig.plugins || []), '@prettier/plugin-xml'],
}
