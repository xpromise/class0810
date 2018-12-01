/*
  用来创建action对象的工厂函数模块
    action对象：{type: 要更新数据类型/要怎样更新数据, data: 参与更新数据的数据（参数）}
 */
import {INCREMENT, DECREMENT} from './action-types';

export const increment = data => ({type: INCREMENT, data});

export const decrement = data => ({type: DECREMENT, data});