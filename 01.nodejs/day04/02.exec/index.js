//引入express模块
const express = require('express');
//引入Users模块
const Users = require('./models/users');
//创建app应用对象
const app = express();
//通过内置中间件暴露出去静态页面
app.use(express.static('public'));
//通过内置中间件解析请求体内容
app.use(express.urlencoded({extended: true}));

//处理注册逻辑的路由
app.post('/register', (req, res) => {
  /*
    1. 获取用户提交的请求参数
    2. 判断用户输入是否合法
    3. 去数据库中查找用户名是否已存在
    4. 将用户数据保存在数据库中
   */
  // 1. 获取用户提交的请求参数
  const {username, pwd, rePwd, email} = req.body;
  // 2. 判断用户输入是否合法
  //建立正则规则
  const usernameReg = /^[A-Za-z0-9_]{5,16}$/;   //用户名可以包含英文字母、数字、下划线，长度为5-16
  const pwdReg = /^[A-Za-z0-9_]{5,20}$/;   //密码可以包含英文字母、数字、下划线，长度为5-20
  const emailReg = /^[A-Za-z0-9_]{3,8}@[A-Za-z0-9_]{2,8}\.com$/;   // 邮箱格式
  
  if (!usernameReg.test(username)) {
    //说明用户名输入不合法
    res.send('用户名可以包含英文字母、数字、下划线，长度为5-16');
    return;
  }
  // 3. 去数据库中查找用户名是否已存在
  // 4. 将用户数据保存在数据库中
})

//处理登录逻辑的路由
app.post('/login', (req, res) => {

})

//监听端口号
app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})