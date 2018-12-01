import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import MessageDetail from '../message-detail';

class Message extends Component {
  state = {
    messages: []
  }
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        messages: [
          {id: 1, content: 'message001'},
          {id: 2, content: 'message002'},
          {id: 4, content: 'message004'}
        ]
      })
    }, 1000)
  }
  
  goBack = () => {
    this.props.history.goBack();
  }
  
  goForward = () => {
    this.props.history.goForward();
  }
  
  push (id) {
    this.props.history.push(`/home/message/${id}`);
  }
  
  replace = id => {
    this.props.history.replace(`/home/message/${id}`);
  }
  
  render () {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((item, index) => (<li key={index}>
              <Link to={`/home/message/${item.id}`}>{item.content}</Link>
              <button onClick={this.push.bind(this, item.id)}>push</button>
              <button onClick={this.replace.bind(null, item.id)}>replace</button>
            </li>))
          }
        </ul>
        <button onClick={this.goBack}>后退</button>
        <button onClick={this.goForward}>前进</button>
        <Route path="/home/message/:id" component={MessageDetail}/>
      </div>
    )
  }
}

export default Message;