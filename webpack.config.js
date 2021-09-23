const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e?)g|svg)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
        dependency: { not: ["url"] },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = (_, argv) => {
  if (argv.mode === "development") {
    // config 객체의 entry를 './dev/app.js'로 변경합니다.
    config.mode = "development";
    config.devtool = "inline-source-map";
    config.devServer = {
      compress: true,
      port: 9000,
      hot: true,
    };
  }

  return config;
};
