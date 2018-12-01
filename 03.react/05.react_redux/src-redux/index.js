import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import store from './redux/store';

render();

//订阅的当前store对象管理的状态
//一旦状态发生变化，就会触发当前subscribe设置的回调函数
store.subscribe(render);

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
