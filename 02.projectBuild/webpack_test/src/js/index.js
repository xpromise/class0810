//引入默认暴露
import add from './module1';
//引入统一暴露
import {count} from './module2';
//引入分别暴露
import {sum} from './module3';
//引入json
import data from '../json/data';
//引入less文件
import '../less/test1.less';
import '../less/test2.less';

console.log(add(2, 3));
console.log(count(3, 2));
console.log(sum(1, 2, 3, 4));
console.log(data);

