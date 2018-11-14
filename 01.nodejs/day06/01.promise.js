/*
  promise： 解决异步编程的一种方案
            代表未来将要发生的事情。
            是一个容器，容器中存放将要发生的事情
  三个状态：
    1. 初始化状态
    2. 成功的状态
    3. 失败状态
 */

/*
- 基本使用
new Promise((resolve, reject)  => {
  //异步操作
})
.then(成功的回调)
.catch(失败的回调)*/

/*Promise.resolve(data)  //创建一个promise对象，状态默认是成功的状态
Promise.reject(data)  //创建一个promise对象，状态默认是失败的状态*/



//我有10个ajax请求，保证10个请求都请求完毕，我在做其他操作
const promise1 = new Promise((resolve, reject)  => {
  //异步操作
  setTimeout(() => {
    console.log('请求1完成了~');
    reject('请求1完成了~');
  }, 1000)
})

const promise2 = new Promise((resolve, reject)  => {
  //异步操作
  setTimeout(() => {
    console.log('请求2完成了~');
    resolve('请求2完成了~');
  }, 3000)
})

const promise3 = new Promise((resolve, reject)  => {
  //异步操作
  setTimeout(() => {
    console.log('请求3完成了~');
    resolve('请求3完成了~');
  }, 2000)
})

;(async () => {
  await promise1;
  await promise2;
  await promise3;
})()

/*
Promise.all([promise1, promise2, promise3])
  .then(res => {
    //等传入的所有promise对象，都变成成功的状态时，才会触发成功回调函数
    console.log(res);
  })
  .catch(err => {
    //一旦有一个promise对象变成失败的状态，就立即触发失败的回调
    console.log('失败的回调函数调用了');
    console.log(err);
  })*/
/*
Promise.race([promise1, promise2, promise3]) //看传入的promise谁的状态先发生变化，如果变化为成功，直接调用成功的回调，如果变化为失败，直接调用失败的回调
  .then(res => {
    console.log('成功的回调函数调用了');
    console.log(res);
  })
  .catch(err => {
    console.log('失败的回调函数调用了');
    console.log(err);
  })*/
