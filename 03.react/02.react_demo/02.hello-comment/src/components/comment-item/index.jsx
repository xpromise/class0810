import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './index.css';

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
  
  delComment = () => {
    // console.log(this.props.index);
    if (window.confirm(`您确认要删除${this.props.comment.name}吗？`)) {
      this.props.del(this.props.index);
    }
  }
  
  render () {
    //获取props数据
    const {name, content} = this.props.comment;
    
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span >{name}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}

export default CommentItem;