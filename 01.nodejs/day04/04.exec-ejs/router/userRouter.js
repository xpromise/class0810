//引入express模块
const express = require('express');
//引入Users模块
const Users = require('../models/users');
//获取Router对象
const Router = express.Router;
//创建路由器对象, 看做一个小型的app应用对象
const router = new Router();
/*
  ejs：一个高效的js模板引擎
      EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面
  使用步骤：
    1. 服务器端
      - 下载ejs模块
        npm i ejs
      - 配置模板资源目录
        app.set('views', './views');  //最终要去某个目录下找模板资源
      - 配置模板引擎
        app.set('view engine', 'ejs');  //使用哪个模板引擎解析模板资源
      - 渲染ejs文件
        res.render(模板资源名称, 要渲染的数据)
    2. 客户端
      <%  %> 能执行任意的js代码，没有任何输出到页面上
      <%= %> 输出转义后的数据到页面上, 用的多。  安全性更高（我们不能相应用户的任何输入）
      <%- %> 输出非转义的数据到页面上
 */
//测试ejs语法
router.get('/testEjs', (req, res) => {
  //数据库操作
  const data = [{
    name: 'Jack',
    age: 18
  }, {
    name: 'Rose',
    age: 16
  }]
  res.render('test', {data});
})

//处理注册逻辑的路由
router.post('/register', async (req, res) => {
  /*
    1. 获取用户提交的请求参数
    2. 判断用户输入是否合法
    3. 去数据库中查找用户名是否已存在
    4. 将用户数据保存在数据库中
   */
  // 1. 获取用户提交的请求参数
  const {username, pwd, rePwd, email} = req.body;
  // const username = req.body.username;
  // 2. 判断用户输入是否合法
  //建立正则规则
  const usernameReg = /^[A-Za-z0-9_]{5,16}$/;   //用户名可以包含英文字母、数字、下划线，长度为5-16
  const pwdReg = /^[A-Za-z0-9_]{5,20}$/;   //密码可以包含英文字母、数字、下划线，长度为5-20
  const emailReg = /^[A-Za-z0-9_]{3,8}@[A-Za-z0-9_]{2,8}\.com$/;   // 邮箱格式
  
  if (!usernameReg.test(username)) {
    //说明用户名输入不合法
    res.send('用户名可以包含英文字母、数字、下划线，长度为5-16');
    return;
  } else if (!pwdReg.test(pwd)) {
    //说明用户名输入不合法
    res.send('密码可以包含英文字母、数字、下划线，长度为5-20');
    return;
  } else if (pwd !== rePwd) {
    //说明用户名输入不合法
    res.send('两次密码输入不一致，请重新输入');
    return;
  } else if (!emailReg.test(email)) {
    //说明用户名输入不合法
    res.send('邮箱格式不正确');
    return;
  }
  // 3. 去数据库中查找用户名是否已存在
  try {
    //放置可能出错代码， 一旦出错了，中断try中代码执行，开始执行catch中的代码，将错误对象传入到error中
    const user = await Users.findOne({username});  //可能出错
    if (user) {
      //用户名已存在
      res.send('用户名已存在，请重新输入');
    } else {
      //没有当前用户
      // 4. 将用户数据保存在数据库中
      await Users.create({username, pwd, email});  //可能出错
      res.send('用户注册成功~');
    }
  } catch (e) {
    // try中的代码出错才能进来
    console.log(e);
    res.send('网络不稳定，请刷新重试~');
  }
})
//处理登录逻辑的路由
router.post('/login', async (req, res) => {
  /*
    1. 获取用户提交参数
    2. 去数据库中找用户名和密码是否匹配正确
    3. 登录成功
   */
  // 1. 获取用户提交参数
  const {username, pwd} = req.body;
  // 2. 去数据库中找用户名和密码是否匹配正确
  try {
    const user = await Users.findOne({username, pwd});
    if (user) {
      // 3. 登录成功
      res.send('用户登录成功~');
    } else {
      //用户名或密码错误
      res.send('用户名或密码错误');
    }
  } catch (e) {
    console.log(e);
    res.send('网络不稳定，请刷新重试~');
  }
  
})

//暴露出去
module.exports = router;
