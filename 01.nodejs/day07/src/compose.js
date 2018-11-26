/*
  处理中间件函数
 */

module.exports = function (ctx, middleware) {
  
  return dispatch(0);
  
  function dispatch(i) {
    //取出回调函数
    const fn = middleware[i];
    //处理函数不存在情况
    if (!fn) return Promise.resolve();
    /*
      (req, res, next) => {
        next() //dispatch(i + 1)
      }
     */
    try {
      return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)))
    } catch (e) {
      return Promise.reject(e);
    }
    
  }
}