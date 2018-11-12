//引入express模块
const express = require('express');
//引入db模块
const db = require('./db');
//引入路由器模块
const userRouter = require('./router/userRouter');
const uiRouter = require('./router/uiRouter');
//创建app应用对象
const app = express();
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