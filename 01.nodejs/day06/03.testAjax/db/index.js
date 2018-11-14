const mongoose = require('mongoose');

module.exports = new Promise((resolve, reject) => {
  mongoose.connect('mongodb://localhost:27017/test_ajax', {useNewUrlParser: true});
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功');
      resolve();
    } else {
      reject(err);
    }
  })
})