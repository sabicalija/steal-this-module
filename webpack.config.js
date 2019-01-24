const { join } = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WebpackBundleSizeAnalyzerPlugin = require("webpack-bundle-size-analyzer").WebpackBundleSizeAnalyzerPlugin;

module.exports = {
  target: "web",
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  entry: "./source/index.js",
  output: {
    path: join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs",
    library: "StealThisModule"
  },
  externals: {
    cowsay: {
      commonjs: "cowsay",
      commonjs2: "cowsay",
      amd: "cowsay",
      root: "cowsay"
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "server" }),
    new WebpackBundleSizeAnalyzerPlugin("./reports/plain-report.txt")
  ]
};
