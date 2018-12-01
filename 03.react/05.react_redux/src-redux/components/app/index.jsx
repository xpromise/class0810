import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {increment, decrement} from '../../redux/actions';

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  
  increment = () => {
    //获取select值
    const {value} = this.select;
    console.log(value);
    //更新状态
    // this.props.store.dispatch({type: 'INCREMENT', data: +value})
    const action = increment(+value);
    this.props.store.dispatch(action);
  }
  
  decrement = () => {
    //获取select值
    const {value} = this.select;
    //更新状态
    const action = decrement(+value);
    this.props.store.dispatch(action);
  }
  
  incrementIfOdd = () => {
    const number = this.props.store.getState();
    if (number % 2 === 1) {
      //获取select值
      const {value} = this.select;
      //更新状态
      this.props.store.dispatch(increment(+value));
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      //获取select值
      const {value} = this.select;
      console.log(value);
      //更新状态
      this.props.store.dispatch(increment(+value));
    }, 1000)
  }
  
  render () {
    const number = this.props.store.getState();
    
    return (
      <div>
        <h1>click {number} times</h1>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button> &nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

export default App;