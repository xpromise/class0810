import React, {Component} from 'react';
import PropTypes from 'prop-types';

//引入单个评论组件
import CommentItem from '../comment-item';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }
  
  render () {
    //获取组件外传递的props数据
    const {comments} = this.props;
    
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentItem key={index} comment={comment}/>)
          }
        </ul>
      </div>
    )
  }
}

export default CommentList;