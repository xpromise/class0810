//引入express模块
const express = require('express');
//创建app应用对象
const app = express();
//设置路由
// 一旦满足两个条件： 请求地址： http://localhost:3000/test  请求方式 'GET'
// 就由后面的回调函数处理当前请求，返回响应
/*
 http://localhost:3000/test   localhost 本机默认域名
 http://127.0.0.1:3000/test   127.0.0.1 本机默认ip地址
 http://192.168.137.1/test    局域网ip地址
 
 协议名://域名(ip地址):端口号/请求路径?查询字符串参数
    默认端口号
      http   80
      https  443
    默认资源名 index.html
 */
app.get('/login', (request, response) => {
  //获取请求参数
  console.log(request.query);  // { username: '123', password: '123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应</h1>');
})
app.post('/register', (request, response) => {

})
//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})