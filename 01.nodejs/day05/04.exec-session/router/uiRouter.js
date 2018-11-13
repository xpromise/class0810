//引入express模块
const express = require('express');
//引入cookie-parser模块
const cookieParser = require('cookie-parser');
const Users = require('../models/users');
//创建路由器对象
const router = new express.Router();

router.use(cookieParser());

//返回登录页面的路由
router.get('/login', (req, res) => {
  /*const fileName = resolve(__dirname, '../public/login.html');
  console.log(fileName);
  //返回登录页面
  res.sendFile(fileName);*/
  res.render('login', {errMsg: ''});
})
//返回注册页面的路由
router.get('/register', (req, res) => {
  /*const fileName = resolve(__dirname, '../public/register.html');
  console.log(fileName);  // C:\Users\web\Desktop\0810\class0810\01.nodejs\day04\03.exec-router\public\register.html
  //返回注册页面
  res.sendFile(fileName);*/
  res.render('register', {errMsg: {}});
})
//返回个人中心页面的路由
router.get('/userCenter', async (req, res) => {
  try {
    //获取cookie
    const {userid} = req.session;
    if (!userid) {
      //用户没有登录，或者cookie失效
      res.redirect('/login');
    } else {
      //用户有cookie，去数据库中找对应的cookie
      const user = await Users.findOne({_id: userid});
      if (user) {
        //找到了，返回个人中心页面
        res.render('user-center', {username: user.username});
      } else {
        //没有找到，cookie是用户自己定义的，非法的cookie
        res.redirect('/login');
      }
    }
  } catch (e) {
    console.log(e);
    res.redirect('/login');
  }
})

//暴露出去
module.exports = router;