const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js", // 이름은 자유
    path: path.resolve(__dirname, "dist"),
  },

  devtool: "none",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};
