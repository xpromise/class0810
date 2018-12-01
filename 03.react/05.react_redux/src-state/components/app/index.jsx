import React, {Component} from 'react';

class App extends Component {
  state = {
    number: 0
  }
  
  increment = () => {
    //获取select值
    const {value} = this.select;
    console.log(value);
    //更新状态
    this.setState({
      number: this.state.number + +value
    })
  }
  
  decrement = () => {
    //获取select值
    const {value} = this.select;
    //更新状态
    this.setState({
      number: this.state.number - +value
    })
  }
  
  incrementIfOdd = () => {
    const {number} = this.state
    if (number % 2 === 1) {
      //获取select值
      const {value} = this.select;
      //更新状态
      this.setState({
        number: number + +value
      })
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      //获取select值
      const {value} = this.select;
      console.log(value);
      //更新状态
      this.setState({
        number: this.state.number + +value
      })
    }, 1000)
  }
  
  render () {
    const {number} = this.state;
    
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