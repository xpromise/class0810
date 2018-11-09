//引入fs模块
const fs = require('fs');

//创建一个可读流
const rs = fs.createReadStream('C:\\Users\\web\\Desktop\\1.mp4');
//创建一个可写流
const ws = fs.createWriteStream('./2.mp4');

rs.pipe(ws);