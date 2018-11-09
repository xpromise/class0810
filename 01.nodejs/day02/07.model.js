//引入mongoose模块
const mongoose = require('mongoose');

const promise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_test', { useNewUrlParser: true });
  //绑定事件监听
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功~');
      resolve();
    } else {
      console.log(err);
      reject(err);
    }
  })
});

;(async () => {
  //连接数据库
  await promise;
  //获取Schema模式对象
  const Schema = mongoose.Schema;
  //创建约束对象
  const studentsSchema = new Schema({  //约束条件，约束文档中结构
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
  /*
    mongoose.model('集合名称（复数形式）', 约束对象)
   */
  const Students = mongoose.model('students', studentsSchema);
  /*
    在mongoose中，可以通过模型对象就能完成CRUD的操作
      - Create
        Model.create(文档对象, 回调函数)
        Model.create(文档对象)  返回值promise对象
      - Read
        Model.find(查询条件[, 投影])  不管找没找到数据都会返回一个[]
        Model.findOne(查询条件[, 投影])  找到了返回{}， 没有找到null
      - Update
        Model.updateOne(查询条件, 要更新的内容[, 配置对象])
        Model.updateMany(查询条件, 要更新的内容[, 配置对象])
      - Delete
        Model.deleteOne(查询条件)
        Model.deleteMany(查询条件)
   */
  // const result = await Students.deleteOne({age: 18});
  
  // $inc 能让指定字段加1
  // const result = await Students.updateOne({age: 18}, {$inc: {age: 1}});
  
  // const result = await Students.findOne({age: {$gte: 20}}, {__v: 0, _id: 0});
  const result = await Students.find({age: {$gte: 18}}, {__v: 0, _id: 0});
  
  /*const result = await Students.create({
    name: '申兰',
    age: 18,
    sex: '女',
    hobby: ['code', '男'],
    info: '来自北京'
  })*/
  console.log(result);
  console.log('数据保存成功~');
})()


