import React, {Component} from 'react';
import {NavLink, Route, Redirect, Switch} from 'react-router-dom';

import News from '../news';
import Message from '../message';

class Home extends Component {
  render() {
    return (
      <div><h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li><NavLink activeClassName='my-active' to="/home/news">News</NavLink></li>
            <li><NavLink activeClassName='my-active' to="/home/message">Message</NavLink></li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              <Redirect to="/home/news"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;