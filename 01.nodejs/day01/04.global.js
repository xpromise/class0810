/*
  nodejs中js包含着什么？
    - DOM  没有
    - BOM  window（没有） / global(替换方案)
      console
      setTimeout
    - ES 基本全部包含
 */

// console.log(global);
// console.log(window);  // window is not define
/*
  console
  process.nextTick()  立即执行函数
  Buffer
  clearInterval
  clearTimeout
  clearImmediate
  setInterval
  setTimeout
  setImmediate  立即执行函数
 */

process.nextTick(() => {
  console.log('process.nextTick()');
})

setImmediate(() => {
  console.log('setImmediate()');
})

setTimeout(() => {
  console.log('setTimeout()');
}, 0)

console.log('主线程执行完所有代码了~');

/*
主线程执行完所有代码了~
process.nextTick()
setTimeout()
setImmediate()

nodejs中事件轮询机制：借助libuv库实现的
整个事件轮询机制大致分为6个阶段：
  timers： 定时器阶段： 1. 计时  2. 当到点了，执行相应的回调函数
  pending callbacks  系统阶段：
  idle, prepare  准备阶段
  poll  轮询阶段， 轮询队列（其他要执行的回调函数都在轮询队列中）
    如果轮询队列不为空，里面有回调函数
      依次取出，同步执行，直到所有回调函数都执行完毕（轮询队列为空）或者达到系统最大限制
    如果轮询队列为空
      如果之前设置过setImmediate函数
        直接去下一个check阶段
      如果之前没有设置过setImmediate函数
        在当前阶段停留，等待回调函数被添加到轮询队列中
        如果定时器到点了，也会去下个check阶段
  check 此阶段用来执行setImmediate设置的回调函数
  close callbacks  关闭阶段 close end
  
  process.nextTick()  能在任意阶段优先执行
 */