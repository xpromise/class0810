//引入express模块
const express = require('express');
//引入body-parser模块, 用来解析请求体参数，解析成一个对象挂载到req.body中
// const bodyParser = require('body-parser');
//创建app应用对象
const app = express();
/*
  中间件：middleware
    是什么？ 本质上一个函数，函数中有三个参数request、response、next
    组成：
      1. request 请求对象
      2. response 响应对象
      3. next 函数，调用堆栈中的下一个中间件
    作用：
      1. 执行任意代码
      2. 修改请求和响应对象
      3. 终结请求-响应循环（接受请求、返回响应）
      4. 调用堆栈中的下一个中间件
    应用：
      1. 应用级中间件
        修改请求和响应对象、过滤非法的请求（防盗链）
      2. 第三方中间件
        修改请求和响应对象，（post请求的请求参数在请求体，请求体默认express不解析的，引入第三方中间件解析）
      3. 内置中间件
        express.static()
        express.urlencoded()
      4. 路由器中间件
        Router
        
    当请求进入服务器，默认只有一个中间件或路由处理。
    中间件和路由都在数组中，定义在前面就在前面。遍历数组取出当前的值，看能不能匹配当前请求
    中间件默认能接受处理所有请求
 */

// 3. 内置中间件
// 将指定文件夹下的所有资源暴露出去
app.use(express.static('public'));
// 用来解析请求体参数，解析成一个对象挂载到req.body中
app.use(express.urlencoded({extended: true}));

// 1. 应用级中间件
/*
//默认接受处理所有请求
app.use((req, res, next) => {
  console.log('应用级中间件被触发了');
  // console.log(req.query); // { username: 'sunwukong', password: '123' }
  // req.xxx = '123'; // 修改请求和响应对象。同一次请求中req/res有且只有一个，其他中间件和路由都是对其的引用
  //防盗链，过滤非法域名地址
  if (req.get('host') !== 'localhost:3000') {
    //说明请求来源的地址是非法的地址
    res.end('error');
    return;
  }
  
  next();//让下一个中间件或者路由也生效
})*/
//看路由的约束条件，满足条件才能进来
function middleware(req, res, next) {
    console.log('应用级中间件被触发了');
    // console.log(req.query); // { username: 'sunwukong', password: '123' }
    // req.xxx = '123'; // 修改请求和响应对象。同一次请求中req/res有且只有一个，其他中间件和路由都是对其的引用
    //防盗链，过滤非法域名地址
    if (req.get('host') !== 'localhost:3000') {
      //说明请求来源的地址是非法的地址
      res.end('error');
      return;
    }
    
    next();//让下一个中间件或者路由也生效
}

// 2. 第三方中间件  用来解析请求体参数，解析成一个对象挂载到req.body中
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', middleware, (req, res) => {
  console.log('根路由被触发了');
  console.log(req.xxx); // 123
  // console.log(req.query); // { username: 'sunwukong', password: '123' }
  res.end('这是根路由服务器返回的响应');
})

app.post('/', (req, res) => {
  console.log(req.body); // undefined  请求体默认express不解析的  { username: 'sunwukong', pwd: '123' }
  res.send('这是post路由返回的响应');
})

//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})