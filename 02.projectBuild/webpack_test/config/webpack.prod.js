/*
  webpack的默认配置文件
  
    loader的使用:
      1. 官网找loader，找不到再去社区npm找
      2. 先下载，注意下载全所有包
      3. 不需要引入，直接配置
      
    插件的使用：
      1. 官网找插件
      2. 下载插件
      3. 引入插件
      4. 配置插件
      
   依赖区别：
      1. 开发依赖：项目构建打包时需要使用的依赖
      2. 生产依赖：项目运行时需要使用的依赖
   环境区别：
      1. 开发环境：帮助项目自动编译更新、检查语法错误、准确的错误提示等...(通常不进行代码压缩, 没有任何文件输出，在内存中编译运行的)
      2. 生产环境：构建打包生成项目上线用的资源文件
   
   
   如何运行：在项目的根目录运行 webpack （默认会找配置文件）
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanCSSPlugin = require("less-plugin-clean-css");
const webpack = require('webpack');

module.exports = {
  //入口起点
  entry: './src/js/index.js',
  //输出
  output: {
    path: resolve(__dirname, '../dist'),
    filename: './js/[hash:10].js'
  },
  //loader
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //还需要下载autoprefixer
          use: ['css-loader', 'postcss-loader', {
            loader: "less-loader",
            options: {
              plugins: [
                new CleanCSSPlugin({ advanced: true })
              ]
            }
          }]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,   // 8kb以下的图片会做base64处理
              publicPath: '../images',  //修改样式中url图片路径
              outputPath: 'images',  //图片最终输入的路径
              name: '[name].[ext]'  //hash 文件哈希值（可以指定位数）  ext 文件扩展名
            }
          }
        ]
      },
      {
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 jshint loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [
          {
            loader: "jshint-loader",
            options: {
              // 查询 jslint 配置项，请参考 http://www.jshint.com/docs/options/
              // 例如
              camelcase: true,
              //jslint 的错误信息在默认情况下会显示为 warning（警告）类信息
              //将 emitErrors 参数设置为 true 可使错误显示为 error（错误）类信息
              emitErrors: true,
              //jshint 默认情况下不会打断webpack编译
              //如果你想在 jshint 出现错误时，立刻停止编译
              //请设置 failOnHint 参数为true
              failOnHint: true,
              esversion: 6
              // 自定义报告函数
              // reporter: function(errors) { }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',   //以指定文件为模板文件，创建新文件，新文件会将打包的资源全部引入
      minify: {    //压缩html代码
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('./css/[hash:10].css'), //提取css成单独文件
    new CleanWebpackPlugin('./dist', {  //清除指定目录下的所有文件
      root: resolve(__dirname, '../'),
    }),
    new webpack.optimize.UglifyJsPlugin()  //压缩js代码
  ]
}