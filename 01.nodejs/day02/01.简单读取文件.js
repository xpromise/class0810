/*
  简单读取文件
  fs.readFile(path[, options], callback)
    - path 文件路径
    - options 可选值
      - encoding
      - flag
    - callback
      - err node错误优先机制
      - data 读取文件内容
 */
//引入fs模块
const fs = require('fs');

//读取文件
fs.readFile('../day01/package.json', (err, data) => {
  if (!err) {
    console.log(data.toString());  //默认返回一个buffer数据/二进制数据
  } else {
    console.log(err);
  }
})