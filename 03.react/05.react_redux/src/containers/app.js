/*
  容器组件，将UI组件包装成容器组件，将redux相关的东西（读取、更新）传递到UI组件中
 */
import {connect} from 'react-redux';
//引入UI组件
import App from '../components/app';
//引入action creators
import {increment, decrement} from '../redux/actions';

//将redux管理的状态映射为属性的方式传递到UI中（UI组件就能读取状态数据）
const mapStateToProps = function (state) {
  //state就是redux管理的状态数据
  return {
    number: state
  }
}
//将更新redux状态的方法为属性的方式传递到UI中（UI组件就能更新状态数据）
const mapDispatchToProps = function (dispath) {
  return {
    increment: function (data) {
      //得到action对象
      const action = increment(data);
      //触发更新状态的操作
      dispath(action);
    },
    decrement: function (data) {
      //得到action对象
      const action = decrement(data);
      //触发更新状态的操作
      dispath(action);
    }
  }
}

//暴露出去容器组件
/*export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)*/

//简写方式
export default connect(
  state => ({number: state}),
  {increment, decrement}
)(App)