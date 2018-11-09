/*
  用来创建模型对象
 */
//引入mongoose模块
const mongoose = require('mongoose');
//获取Schema模式对象
const Schema = mongoose.Schema;
//创建约束对象
const studentsSchema = new Schema({
  name: {
    type: String,
    unique: true, //唯一的
    required: true  //必须的
  },
  age: Number,
  sex: String,
  hobby: [String], //hobby值为数组，数组里面的值为字符串
  info: Schema.Types.Mixed,  //所有数据类型都可以
  createTime: {
    type: Date,
    default: Date.now   //默认值
  }
})
//创建模型对象
const Students = mongoose.model('students', studentsSchema);
//暴露出去
module.exports = Students;