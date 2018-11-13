//引入mongoose模块
const mongoose = require('mongoose');
//连接数据库
module.exports = new Promise((resolve, reject) => {
  mongoose.connect('mongodb://localhost:27017/exec', {useNewUrlParser: true});
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成了~');
      resolve();
    } else {
      reject(err);
    }
  })
})