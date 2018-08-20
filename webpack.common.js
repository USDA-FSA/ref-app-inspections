//
//
//
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLBeautifyPlugin = require('html-beautify-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin');
const path = require('path');

const fsaStyleImg = path.join(__dirname, 'node_modules/fsa-style/src/img/');

module.exports = {

  devtool: 'source-map',

  entry:  {
    'fsa-style': [
      path.resolve(__dirname, 'src/index.js')
    ]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      'fsaStyleScss' : path.join(__dirname, 'node_modules/fsa-style/src/stylesheets/fsa-style.scss')
    }
  },

  module: {
    rules: [

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // needed for HTML Partials to work
              interpolate: true,
              removeAttributeQuotes: false
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              partialDirs: [
                  path.join(__dirname, 'src', '/**/')
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "imports-loader?$=jquery"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/img/',
              name: '[name].[ext]',
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/fonts/',
              name: '[name].[ext]',
              limit: 100000
            }
          }
        ]
      }
    ]
  },

  plugins:[
    new CopyWebpackPlugin([
      /* Used to copy directly to /dist
      {
        from: './src/js',
        to: './js/'
      },
      */
      {
        from: './src/img',
        to: './img/'
      },
      {
        from: fsaStyleImg,
        to: './img/'
      },
      {
        from: './src/fonts',
        to: './fonts/'
      }
    ]),

    new HTMLWebpackPlugin({
      title: "index",
      // the template you want to use
      template: "./src/index.hbs",
      // the output file name
      filename: path.join(__dirname, "./dist/index.html"),
      inject: "body"
    }),

    new HTMLWebpackPlugin({
      title: "handlebars",
      // the template you want to use
      template: "./src/handlebars.hbs",
      // the output file name
      filename: path.join(__dirname, "./dist/handlebars.html"),
      inject: "body"
    }),

    new HTMLWebpackPlugin({
      title: "settings",
      // the template you want to use
      template: "./src/settings.hbs",
      // the output file name
      filename: path.join(__dirname, "./dist/settings.html"),
      inject: "body"
    }),

    new HTMLWebpackPlugin({
      title: "boilerplate",
      // the template you want to use
      template: "./src/boilerplate.hbs",
      // the output file name
      filename: path.join(__dirname, "./dist/boilerplate.html"),
      inject: "body"
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "[name].css"
    }),

    new HTMLBeautifyPlugin({
      config: {
          html: {
              end_with_newline: true,
              indent_size: 2,
              indent_with_tabs: true,
              indent_inner_html: true,
              preserve_newlines: true,
              unformatted: ['p', 'i', 'b', 'span']
          }
      },
      replace: [ ' type="text/javascript"' ]
    })

  ]
};
