import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//引入容器组件
import App from './containers/app';

import store from './redux/store';

ReactDOM.render((
  //Provider负责1. 将状态传递到所有组件中，2. 一旦状态发生变化，重新渲染组件
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

