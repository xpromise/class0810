/*
  koa: 基于 Node.js 平台的下一代 web 开发框架
  特点：
    1. 更小
    2. 更富有表现力
    3. 更健壮的
 */
//引入koa模块
const Koa = require('koa');
const _ = require('koa-route');
//创建app应用对象
const app = new Koa();
//路由用法
app.use(_.get('/login/:id', (ctx, name, next) => {
  //接受get请求参数
  console.log(ctx.query); // { username: '123', pwd: '456' }
  console.log(name);  // 占位符 param参数 123456
  //返回响应
  ctx.body = '123456789';
}))
//设置中间件（koa本身没有路由，只有中间件）
/*app.use((ctx, next) => {
  /!*
    context 内部就封装了req和res对象
   *!/
  
  //接受get请求参数
  console.log(ctx.query); // { username: '123', pwd: '456' }
  //返回响应
  ctx.body = '123456789';
})*/
//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了');
  else console.log(err);
})