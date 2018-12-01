/*
  用来根据之前的状态（previousState）和更新状态的行为(action)产生新状态，新状态会交由store对象管理
 */

//reducers函数名称一般和要管理的状态数据相关
//初始化状态的默认值
export default function number(previousState = 0, action) {
  switch (action.type) {
    case 'INCREMENT' :
      //作为当前函数的返回值，返回一个新的状态（一定不能修改原数据）
      return previousState + action.data;
    case 'DECREMENT' :
      return previousState - action.data;
      //初始化时使用
    default :
      return previousState;
  }
}