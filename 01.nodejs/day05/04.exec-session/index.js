//引入express模块
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
//引入db模块
const db = require('./db');
//引入路由器模块
const userRouter = require('./router/userRouter');
const uiRouter = require('./router/uiRouter');
//创建app应用对象
const app = express();
// 配置模板资源目录
app.set('views', './views');  //最终要去某个目录下找模板资源
// 配置模板引擎
app.set('view engine', 'ejs');  //使用哪个模板引擎解析模板资源

//当执行req.session.xxx=xxx时，会创建session对象，服务器返回响应时会返回一个cookie，包含session_id
//当下一次会话时，会解析cookie中的session_id，找到对应的session对象，将对象挂载req.session
app.use(session({
  secret: 'hello atguigu',
  saveUninitialized: false, // 直到要存储时才创建session对象
  resave: false, // 如果没有修改就不重新保存session
  store: new MongoStore({
    url: 'mongodb://localhost:27017/exec',
    touchAfter: 24 * 3600 // 24小时内更新一次
  })
}));

//通过内置中间件暴露出去静态页面
/*const middleware = express.static('public');  (req, res, next) => {}
app.use(middleware);*/
// app.use(express.static('public'));
//通过内置中间件解析请求体内容
app.use(express.urlencoded({extended: true}));
/*
  路由器: 用来分类和管理路由的
 */
db
  .then(() => {
    //应用路由器
    app.use(userRouter);
    app.use(uiRouter);
  })

/*;(async () => {
  await db;
  //设置路由
})()*/

//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})