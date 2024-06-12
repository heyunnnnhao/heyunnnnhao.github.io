// webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const { ProvidePlugin } = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const resolvePath = (dirname) => path.resolve(__dirname, "../", dirname);

module.exports = {
  entry: resolvePath("src/index.tsx"),
  output: {
    filename: "static/js/[name].[contenthash:8].js", // 每个输出js的名称
    path: resolvePath("dist"), // 打包的出口文件夹路径
    clean: true,
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        enforce: "pre",
        include: [resolvePath("src")],
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        enforce: "pre",
        include: [resolvePath("src")],
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        include: [resolvePath("src")],
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                jsx: true,
                topLevelAwait: true,
                importMeta: true,
                decorators: true,
                dynamicImport: true,
              },
              transform: null,
              target: "es2016",
              externalHelpers: false,
              keepClassNames: true,
            },
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: "img/[name].[contenthash:6][ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "fonts/[name].[contenthash:6][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "media/[name].[contenthash:6][ext]", // 文件输出目录和命名
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less", ".scss", ".sass", ".css"],
    alias: {
      src: resolvePath("src"),
    },
    modules: [resolvePath("node_modules")],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath("index.html"),
      inject: true,
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new DefinePlugin({}),
  ],
  stats: {
    all: true,
  },
  // 开启webpack持久化存储缓存
  cache: {
    type: "filesystem", // 使用文件缓存
  },
};
