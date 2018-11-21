/*
  webpack的默认配置文件
  
    loader的使用:
      1. 官网找loader，找不到再去社区npm找
      2. 先下载，注意下载全所有包
      3. 不需要引入，直接配置
   
   如何运行：在项目的根目录运行 webpack （默认会找配置文件）
 */
const {resolve} = require('path');

module.exports = {
  //入口起点
  entry: './src/js/index.js',
  //输出
  output: {
    path: resolve(__dirname, './build'),
    filename: './js/built.js'
  },
  //loader
  module: {
    rules: [
      {
        test: /\.less$/,  // 匹配文件的规则，说明loader对哪些文件生效
        use: [{  //从右往左依次同步执行
          loader: "style-loader" // 创建一个style标签，将js中的css放入其中
        }, {
          loader: "css-loader" // 将css以commonjs语法打包到js中
        }, {
          loader: "less-loader" // 编译less为css
        }]
      }
    ]
  },
  //插件
  plugins: []
}