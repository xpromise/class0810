/*
  Buffer
 */

//创建Buffer
// const buf = new Buffer(10);  //废弃了，性能不好

const buf1 = Buffer.alloc(10);  //创建buffer容器，长度为10  特点：安全，内部不包含敏感数据，速度慢
console.log(buf1);
const buf2 = Buffer.allocUnsafe(10); //创建buffer容器，长度为10  特点：不安全，内部可能包含敏感数据，速度快
console.log(buf2);   // <Buffer 70 7b 08 4a 46 02 00 00 10 7c>
/*
  00 - ff      16进制
  0 -  255     10进制
  00000000 - 11111111   2进制
  
  1 byte = 8 bit
  1 kb = 1024 byte
  1 mb = 1024 kb
  1 gb = 1024 mb
  
  utf8
  英文/数字占内存1字节大小
  中文占内存3字节大小
*/


const buf3 = Buffer.from('尚硅谷');
console.log(buf3);
console.log(buf3.toString());  // *********  将buffer数据转化为字符串
console.log(buf3.length);
console.log(buf3[4]);
buf3.forEach((item, index) => console.log(item, index))