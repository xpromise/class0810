//引入express模块
const express = require('express');
//创建app应用对象
const app = express();
/*
  路由：指定义请求路径以及如何响应客户端的请求的一个方式
  理解：一个映射关系，一个key（path）对应value（callback）
  组成：
    1. 请求方式 GET（查）/POST（增）/PUT（改）/DELETE（删）
      - 什么时候用GET和POST
        - get请求通常应用于携带无关紧要的参数
        - post请求通常应用于安全系数较高，携带了用户的隐私数据
    2. 请求路径 path, 要求必须以 / 开头
    3. 若干个回调函数（句柄函数）
 */
// 根路由  http://localhost:3000/
app.get('/', (req, res) => {
  /*
    request 请求对象
      req.query  获取get请求参数，查询字符串
      req.params 获取路由路径参数
      req.body  获取post请求请求体数据（引入中间件才行）
      req.cookies 获取cookie
      req.headers 获取请求头
      req.get()  获取指定请求头信息
    response 响应对象
    注意：在同一个路由中，有且只能有一个响应
      res.download()  返回响应，浏览器自动下载指定文件到本地
      res.sendFile()  返回响应，浏览器自动打开指定文件显示

      res.end()  返回响应，快速响应
      res.json() 返回响应，将传入的数据转化成json字符串返回
      res.redirect() 返回响应，请求网址重定向到其他网址
      res.send() 返回响应，根据响应的内容设置对应响应头，返回响应
      
      res.set()  设置响应头
      res.get()  获取响应头

      res.status()  设置响应状态码
   */
  /*console.log(req.headers);
  console.log(req.get('accept'));*/
  
  
  // res.send('这是服务器返回的响应');
  // res.download('./public/index.html');
  // res.sendFile(__dirname + '/public/index.html');
  // res.json({username: 'sunwukong', age: 18});
  // res.redirect('http://www.atguigu.com');
  // res.send({username: 'sunwukong', age: 18});
  
  res.status(304).end();
})
// http://localhost:3000/login
app.post('/login', (req, res) => {

})
app.get('/main', (req, res) => {

})
// 子路由、二级路由
app.get('/main/message', (req, res) => {

})
// :id 占位符， 能匹配任意/shop/xxx请求
app.get('/shop/:id', (req, res) => {
  console.log(req.params); // { id: '123456' }
  
  res.send('这是服务器返回的响应');
})


//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})