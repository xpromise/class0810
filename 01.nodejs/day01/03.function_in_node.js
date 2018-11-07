/*
  node中所有模块都默认包裹一层函数，你没有定义，默认自动加上
    function (exports, require, module, __filename, __dirname) {}
      - exports  暴露模块的内容
      - require 引入其他模块
      - module.exports 暴露模块的内容
      - __filename 文件绝对路径
      - __dirname 文件夹绝对路径
   - 函数有什么作用：
     - 能让我使用commonjs模块化，还能读取当前文件/文件夹路径
     - 避免变量命名冲突
     - 隐藏内部实现
     
 */

console.log(arguments.callee.toString()); //实参列表
console.log(__filename);  // C:\Users\web\Desktop\0810\class0810\01.nodejs\day01\03.function_in_node.js
console.log(__dirname);  // C:\Users\web\Desktop\0810\class0810\01.nodejs\day01
