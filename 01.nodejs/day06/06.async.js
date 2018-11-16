/*
  async函数默认返回值是promise对象
  只要async函数里面代码没有出错，默认走的是成功的回调函数, 回调函数中的res由async函数中return决定，默认是undefined
  只要async函数中有一个promise对象的状态变成失败的状态，就直接中断async函数执行，直接走失败的回调函数
 */

(async () => {
  
  const result = await new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('定时器执行完了');
      reject(123);
      // reject();
    }, 2000)
  })
  console.log(result);
  console.log('主线程执行完了~');
  
  return result;
})()
  .then(res => {
    console.log('成功的回调函数');
    console.log(res);
  })
  .catch(err => {
    console.log('失败的回调函数');
    console.log(err);
  })
