const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false},
          }
        ]
      }, {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: { 
              resources: [
                'src/styles/index.scss',
              ]
            },
          }
        ]
      }, {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      }, {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Demo webpack'
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      // filename: 'style.css',
      filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     // { from: "./public", to: "dist" },
    //     { from: "./public" },
    //   ],
    // }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
  ],
  devServer: {
    compress: true,
    port: 3000,
  }
};