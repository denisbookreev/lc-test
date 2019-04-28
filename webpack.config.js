const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: `@import "./src/assets/css/basic/_vars.scss";`
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Store': path.resolve(__dirname, 'src/store'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/components/pages'),
      '@UI': path.resolve(__dirname, 'src/components/ui'),
      '@Layouts': path.resolve(__dirname, 'src/components/layouts')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: './src',
    overlay: true,
    historyApiFallback: true
  }
}
