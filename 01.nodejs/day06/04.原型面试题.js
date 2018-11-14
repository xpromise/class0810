function Foo() {
  getName = function () { console.log(1); };
  return this;
}
Foo.getName = function () { console.log(2);};
Foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);};
function getName() { console.log(5);};


/*
function Foo() {
  getName = function () { alert (1); };
  return this;
}
// function getName() { alert (5);};
// var getName;
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
// getName = function () { alert (4);};
getName = function () { alert (1); };
*/

//请写出以下输出结果：
Foo.getName();  // 2   2  2
getName();   // 5    4   4
Foo().getName();  // 1   1  1   window.getName()
getName(); // 4   1  1
new Foo.getName();  // 1  2   ?   new (function () { alert (2);})()
new Foo().getName(); // ?  3   ?  fn.getName()
new new Foo().getName();  // ?  3   ?  new fn.getName()  --> new (function () { alert (3);};)()