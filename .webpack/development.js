const path = require("path");
const merge = require("webpack-merge");
const config = require("./base");

module.exports = merge(config, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 9000
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  }
});