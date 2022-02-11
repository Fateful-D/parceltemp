const { plugin } = require("postcss");

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-runtime"],
});
// 아닛...?

module.exports = {
  presets: ['@babel/preset-env'],
}