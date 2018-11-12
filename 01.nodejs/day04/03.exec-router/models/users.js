//引入mongoose模块
const mongoose = require('mongoose');
//获取模式对象
const Schema = mongoose.Schema;
//创建约束对象
const usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})
//创建模型对象
const Users = mongoose.model('users', usersSchema);
//暴露出去
module.exports = Users;