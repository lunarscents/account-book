const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    //   // alias: {
    //   //   'components': path.resolve(__dirname, '..', 'src', 'components'),
    //   //   'containers': path.resolve(__dirname, '..', 'src', 'containers'),
    //   //   'assets': path.resolve(__dirname, '..', 'src', 'assets'),
    //   // },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ reportFiles: ["src/**/*.{ts,tsx}"] }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    })
  ],
};