const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: [
      './src/index.js',
      './src/styles/index.scss',
      './src/styles/normalize.css',
    ],
    result: [
      './src/script/results/result.js',
      './src/styles/index.scss',
      './src/styles/normalize.css',
    ],
    startQuiz: [
      './src/script/startQuiz/startQuiz.js',
      './src/styles/index.scss',
      './src/styles/normalize.css',
    ],
    // birdsData: [
    //   './src/script/startQuiz/birdsData.js',
    // ],
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].[contenthash].js',
    clean: {
      dry: false,
      keep: /\.git/,
    },
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
      },{
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        loader: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/script/main/index.html',
      filename: './index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/script/startQuiz/index.html',
      filename: './startQuiz.html',
      chunks: ['startQuiz']
    }),
    new HtmlWebpackPlugin({
      template: './src/script/results/index.html',
      filename: './results.html',
      chunks: ['result']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        // { from: "./public", to: "dist" },
        { from: "./public" },
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname + '/dist'),
    },
    hot: false,
    compress: true,
    port: 3000,
  }
};