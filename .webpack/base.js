const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: path.resolve(__dirname, "../src/index.tsx"),
  // entry: {
  //   'vendor': ['react', 'react-dom'],
  //   'app': path.resolve(__dirname, '..', 'src', 'index.tsx'),
  // },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: 'initial',
  //         name: 'vendor',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']//,
    // alias: {
    //   'components': path.resolve(__dirname, '..', 'src', 'components'),
    //   'containers': path.resolve(__dirname, '..', 'src', 'containers'),
    //   'assets': path.resolve(__dirname, '..', 'src', 'assets'),
    // },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};