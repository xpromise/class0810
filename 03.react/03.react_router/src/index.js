// import * as React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';

ReactDOM.render((
  //BrowserRouter 和 HashRouter 让路由组件生效
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));