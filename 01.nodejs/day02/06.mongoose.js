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

/*promise
  /!*.then(res => {  //成功的回调
    console.log('成功的回调被触发了');
  }, err => {   //失败的回调
    console.log('失败的回调被触发了');
  })*!/
  .then(res => { //成功的回调
    console.log('成功的回调被触发了');
  })
  .catch(err => {  //失败的回调
    console.log('失败的回调被触发了');
  })*/

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
  //创建文档对象
  const s = new Students({
    name: '白克迪',
    age: 18,
    sex: '男',
    hobby: ['吃吃吃', '睡睡睡'],
    info: '多读书，多看报，少吃零食，多睡觉'
  })
  //手动保存文档对象
  s.save(err => {
    if (!err) {
      console.log('数据保存成功~');
    } else {
      console.log(err);
    }
  })
  
})()


