/*
  主模块：命名通常有三种方式： index.js main.js app.js
  用来将各个其他模块组合起来运行
 */
//引入db模块
const db = require('./db');
//引入Students模块
const Students = require('./models/students');

(async () => {
  //连接数据库
  await db;  //当引入模块时，已经开始连接数据库了，在这等待数据库连接成功，当promise对象的状态改为成功的状态，才代表数据库连接成功
  
  //使用模型对象
  const result = await Students.create({
    name: '孟德华',
    age: 20,
    sex: '男',
    hobby: ['男', '女'],
    info: '东北人'
  })
  console.log(result);
})()