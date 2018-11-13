const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
/*
  cookie:
    本质上是浏览器存储的一个文本，随着http请求发送到服务器
    理解一个头（请求头/响应头）：
      当服务器响应浏览器的请求时，如果返回了cookie，以响应头方式返回
      浏览器接受到cookie会保存下来，
      下次或者今后浏览器请求服务器会自动携带上cookie，以请求头方式请求服务器
      服务器接受到cookie，通过cookie来判断不同的用户
    使用：
      1. 下载第三方中间件 cookie-parser
        npm i cookie-parser
      2. 使用第三方中间件
        app.use(cookieParser());
    作用：
      1. 保存数据，每一个cookie能保存数据的大小大约为4kb，数量大约为20个
      2. 解决http无状态问题，标识不同的用户
    应用：
      7天免登陆
    缺点：
      1. 容量小
      2. 传输流量大（每次发送请求时，都自动携带上所有cookie）
 */
// 使用第三方中间件, 解析cookie数据，将解析后的对象挂载req.cookies
app.use(cookieParser());

app.get('/testCookie01', (req, res) => {
  //返回一个cookie给用户
  //设置cookie
  res.cookie('userid', 'sunwukong', {maxAge: 1000 * 3600 * 24});
  //返回响应
  res.send('这是服务器返回的响应~');
})

app.get('/testCookie02', (req, res) => {
  //获取cookie
  console.log(req.cookies);
  /*
    { 'Webstorm-129da853': '8726c2d8-3b88-48b8-8db0-dd82e62fb79a',
  userid: 'sunwukong' }
   */
  //返回响应
  res.send('这是服务器返回的响应~');
})

app.get('/testCookie03', (req, res) => {
  //删除cookie
  // res.clearCookie('userid');
  res.cookie('userid', '', {maxAge: 0});
  //返回响应
  res.send('这是服务器返回的响应~');
})


app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})