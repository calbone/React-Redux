const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

module.exports = {
  mode: MODE,

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
       test: /\.js$/,
       use: [
         {
           loader: 'babel-loader',
         }
       ],
       exclude: /node_modules/,
      },
      {
        test: /\.scss/,
          use: [
            'style-loader',
            { 
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash]',
                // CSS内のurl()メソッドの取り込みを禁止する
                url: false,
                // CSSの空白文字を削除する
                minimize: true,
                // ソースマップを有効にする
                sourceMap: enabledSourceMap,
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2
              } 
            },
            {
            loader: 'postcss-loader',
              options: {
                // PostCSS側でもソースマップを有効にする
                sourceMap: true,
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  require('autoprefixer')({grid: true})
                ]
              },
            },
            {
              loader: 'sass-loader',
              options: {
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,
              }
            }
          ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    // new HtmlWebpackPlugin({template: './public/index.html'})
  ],
}