const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MODE = 'development';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  entry: {
    output: ['css-hot-loader/hotModuleReplacement', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-hot-loader/babel']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
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
                  sourceMap: enabledSourceMap,
                  plugins: [
                    // Autoprefixerを有効化
                    // ベンダープレフィックスを自動付与する
                    require('autoprefixer')({ grid: true })
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  // ソースマップの利用有無
                  sourceMap: enabledSourceMap
                }
              }
            ]
          })
        )
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像を埋め込まず任意のフォルダに保存する
        loader: 'file-loader',
        options: {
          name: '[path][name][hash].[ext]',
          publicPath: '/'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};
