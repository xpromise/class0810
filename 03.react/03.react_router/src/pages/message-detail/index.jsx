import React, {Component} from 'react';

class MessageDetail extends Component {
  messages = [
    {id: 1, title: 'message001', content: 'message001 content'},
    {id: 2, title: 'message002', content: 'message002 content'},
    {id: 4, title: 'message004', content: 'message004 content'},
  ]
  
  render () {
    //获取占位符id， params参数
    const {id} = this.props.match.params;
    console.log(id);
    //找到对应显示的数据
    const message = this.messages.find((item, index) => item.id === +id);
    console.log(message);
    return (
      <ul>
        <li>{message.id}</li>
        <li>{message.title}</li>
        <li>{message.content}</li>
      </ul>
    )
  }
}

export default MessageDetail;