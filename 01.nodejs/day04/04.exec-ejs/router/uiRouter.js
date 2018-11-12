//引入express模块
const express = require('express');
//引入path模块，用来处理路径问题模块
const {resolve} = require('path');
//创建路由器对象
const router = new express.Router();

//返回登录页面的路由
router.get('/login', (req, res) => {
  const fileName = resolve(__dirname, '../public/login.html');
  console.log(fileName);
  //返回登录页面
  res.sendFile(fileName);
})
//返回注册页面的路由
router.get('/register', (req, res) => {
  const fileName = resolve(__dirname, '../public/register.html');
  console.log(fileName);  // C:\Users\web\Desktop\0810\class0810\01.nodejs\day04\03.exec-router\public\register.html
  //返回注册页面
  res.sendFile(fileName);
})

//暴露出去
module.exports = router;