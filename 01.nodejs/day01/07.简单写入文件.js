/*
  简单写入文件
  fs.writeFile(file, data[, options], callback)
    - file  写入的文件路径
    - data  要写入的数据
    - options 可选的， 传参就是用传入的实参，不传参就使用设置的默认值
      - encoding  写入内容的编码方式 utf8
      - mode 设置写入的文件的权限 0o666（可读可写）
        0o111 文件可执行权限
        0o222 文件可写入的权限
        0o444 文件可读取的权限
      - flag 要对文件进行的操作 'w'写入   'r'读取  'a'追加
    - callback 回调函数
      - error 错误对象 （nodejs中有一个错误优先机制）
        - 如果方法出错了 error就是一个对象
        - 如果方法没有出错，error就是null
 */
//fs是node的核心模块，所有核心模块不需要下载，只要引入才能使用
const fs = require('fs');

//简单写入文件
fs.writeFile('./b.txt', '今天天气真晴朗~~', {encoding: 'utf8', mode: 0o666, flag: 'a'}, err => {
  if (!err) {
    //方法没有出错
    console.log(err);
    console.log('简单写入文件成功~');
  } else {
    //方法出错了
    console.log(err);
  }
})
