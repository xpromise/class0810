const express = require('express');
const db = require('./db');
const Cities = require('./models/cities');
const app = express();

app.use(express.static('public'));

;(async () => {
  await db;
  //返回所有省份的路由
  app.get('/province', async (req, res) => {
    //需不需要请求参数，看路由中有没有需要用户传递的可变量
    try {
      const province = await Cities.find({level: 1}, {province: 1, name: 1, _id: 0});
      //返回响应
      res.json({code: 1, data: province});
    } catch (e) {
      console.log(e);
      res.json({code: 0, err: '网络不稳定，请刷新试试'})
    }
  })
  //返回指定省份所有城市信息的路由
  app.get('/city', async (req, res) => {
    //接受用户提交的请求参数
    const {province} = req.query;
    if (!province) {
      res.json({code: 2, err: '请选择省份'})
    }
    try {
      const city = await Cities.find({level: 2, province}, {city: 1, name: 1, _id: 0});
      //返回响应
      res.json({code: 1, data: city});
    } catch (e) {
      console.log(e);
      res.json({code: 0, err: '网络不稳定，请刷新试试'})
    }
  })
  //返回指定省份指定城市所有区县信息的路由
  app.get('/county', async (req, res) => {
    //接受用户提交的请求参数
    const {province, city} = req.query;
    if (!province && !city) {
      res.json({code: 2, err: '请选择省份或者城市'})
    }
    try {
      const county = await Cities.find({level: 3, province, city}, {county: 1, name: 1, _id: 0});
      //返回响应
      res.json({code: 1, data: county});
    } catch (e) {
      console.log(e);
      res.json({code: 0, err: '网络不稳定，请刷新试试'})
    }
  })
})()

app.listen(4000, err => {
  if (!err) console.log('服务器启动成功了~');
  console.log(err);
})