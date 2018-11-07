/*
  流式写入文件
    fs.createWriteStream(path[, options])
      - path 要写入文件路径
      - options 可选值，配置对象
        flags <string> 详见支持的文件系统flag。默认为 'w'。
        encoding <string> 默认为 'utf8'。
        fd <integer> 默认为 null。文件描述符
        mode <number> 默认为 0o666。
        autoClose <boolean> 默认为 true。 自动关闭，当我调用关闭可写流方法时，会自动关闭文件
        start <number>  要写入文件的起始位置
 */
//引入fs模块
const fs = require('fs');

//创建可写流
const ws = fs.createWriteStream('c.txt');

//监听可写流打开和关闭的事件
//通过on绑定持久化事件
//通过once绑定一次性事件，触发一次即失效
ws.once('open', () => {
  console.log('可写流打开了~');
})
ws.once('close', () => {
  console.log('可写流关闭了~');
})

//往可写流中写入内容
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');

//告诉他写完了，手动关闭可写流
ws.end();