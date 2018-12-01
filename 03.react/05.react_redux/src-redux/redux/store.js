/*
  此模块用来创建store对象的，
    通过createStore(reducers函数)创建
 */
import {createStore} from 'redux';
//引入reducers函数
import number from './reducers';
//将创建的store对象默认暴露了
export default createStore(number);