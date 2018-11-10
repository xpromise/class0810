/*
  此模块用来连接数据库的
 */
//引入mongoose模块
const mongoose = require('mongoose');
//暴露出去
module.exports = new Promise((resolve, reject) => {
  //连接mongodb
  mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
  //绑定事件监听
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功了~');
      resolve();
    } else {
      console.log(err);
      reject(err);
    }
  })
})