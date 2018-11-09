/*
  流式读取文件
  fs.createReadStream(path[, options])
    - path 文件路径
    - options 可选值
      flags <string> 详见支持的文件系统flag。默认为 'r'。
      encoding <string> 默认为 null。
      fd <integer> 默认为 null。
      mode <integer> 默认为 0o666。
      autoClose <boolean> 默认为 true。
      start <integer>
      end <integer> 默认为 Infinity。
      highWaterMark <integer> 默认为 64 * 1024。  默认每次读取的最大值 64kb
 */

//引入fs模块
const fs = require('fs');

//创建一个可读流
const rs = fs.createReadStream('C:\\Users\\web\\Desktop\\1.mp4');
//创建一个可写流
const ws = fs.createWriteStream('./1.mp4');
//绑定事件监听
rs.once('open', () => console.log('可读流打开了~'));
rs.once('close', () => {
  console.log('可读流关闭了~');
  //在当前事件，代表读取完了所有数据, 手动关闭可写流
  ws.end();
});

ws.once('open', () => console.log('可写流打开了~'));
ws.once('close', () => console.log('可写流关闭了~'));

//绑定读取文件的事件
rs.on('data', data => {
  //文件较大，分批次读取，每次读取会触发当前事件，将读取的内容传入到回调函数中
  // console.log(data.length);
  ws.write(data);
})




