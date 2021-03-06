import React, {Component} from 'react';
import PropTypes from 'prop-types';


class App extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }
  
  increment = () => {
    //获取select值
    const {value} = this.select;
    console.log(value);
    //更新状态
    this.props.increment(+value);
  }
  
  decrement = () => {
    //获取select值
    const {value} = this.select;
    //更新状态
    this.props.decrement(+value);
  }
  
  incrementIfOdd = () => {
    const number = this.props.number;
    if (number % 2 === 1) {
      //获取select值
      const {value} = this.select;
      //更新状态
      this.props.increment(+value);
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      //获取select值
      const {value} = this.select;
      console.log(value);
      //更新状态
      this.props.increment(+value);
    }, 1000)
  }
  
  render () {
    const number = this.props.number;
    
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