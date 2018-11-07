/*
  Commonjs模块化规范
    引入： require(模块路径)
      1. 模块路径
        - 第三方模块（别人的），直接写模块名称
        - 核心模块 (node自带模块)，直接写模块名称
        - 自定义模块（自己的），模块路径必须以 './' 或 '../' 开头， 否则报错， can not find module 'xxxx'
      2. 模块名称后缀名
        - 省略 .js  .json ， node中自带能解析这两种文件，其他文件不解析
    暴露：
      exports   只能: exports.xxx = xxx  不能: exports = {}
      module.exports  通常：module.exports = xxx  / {xxx: xxx, yyy: yyy}
    模块暴露的本质： module.exports 指向那个对象
 */

//引入模块
const {add} = require('./module1');
const m2 = require('./module2');

console.log(add(2, 3));
console.log(m2(1, 2, 3, 4));
