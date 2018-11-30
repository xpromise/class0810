import React, {Component} from 'react';
import {Link, NavLink, Route, Redirect, Switch} from 'react-router-dom';

import About from '../../pages/about';
import Home from '../../pages/home';

import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* NavLink 比 Link 多一个activeClassName， 默认选中元素多一个active类*/}
              {/*Link 和 NavLink 作用：修改url地址，添加浏览历史记录*/}
              <NavLink className="list-group-item" activeClassName='my-active' to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName='my-active' to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*只要在Route组件中通过component引入的组件就是路由组件，其他组件就是非路由组件*/}
                {/*Switch 会从上到下依次检查哪个路由匹配上了，一旦匹配上了，就使用当前组件，而忽略其他组件*/}
                <Switch>
                  {/*Route 作用：和当前路径匹配，匹配上了加载对应的组件*/}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/*Redirect 作用：重定向，默认匹配所有路径*/}
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;