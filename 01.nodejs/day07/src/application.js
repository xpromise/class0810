
const http = require('http');
const compose = require('./compose');

class Application {
  constructor () {
    //初始化中间件数组
    this.middleware = [];
  }
  //中间件
  use (fn) {
    this.middleware.push(fn);
  }
  //监听端口号的方法
  listen (...args) {
    const server = http.createServer((req, res) => {
      this.callback(req, res)
    });
    server.listen(...args);
  }
  //处理中间件函数
  callback (req, res) {
    //创建ctx对象
    const ctx = this.createContext(req, res);
    //返回一个promise对象
    const fn = compose(ctx, this.middleware);
    return fn.then(() => {
      //返回响应
      ctx.res.end(ctx.body);
    }).catch(err => console.log(err))
  }
  //创建ctx对象
  createContext (req, res) {
    let context = {};
    context.req = req;
    context.res = res;
    return context;
  }
}

module.exports = Application;