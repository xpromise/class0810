//引入依赖
import React, {Component} from 'react';

//引入图片资源
import logo from './logo.svg';
//引入样式资源
import './index.css';

//定义组件
class App extends Component{
  render () {
    return (
      <div>
        <h1>hello react</h1>
        <img className="logo" src={logo} alt="logo"/>
      </div>
    )
  }
}

//默认暴露
export default App;