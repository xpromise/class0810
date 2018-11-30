import React, {Component} from 'react';
import PropTypes from 'prop-types';

//引入单个评论组件
import CommentItem from '../comment-item';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired
  }
  
  render () {
    //获取组件外传递的props数据
    const {comments, del} = this.props;
    
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {
          comments.length
            ? (
              <ul className="list-group">
                {
                  comments.map((comment, index) => <CommentItem key={index} comment={comment} del={del} index={index}/>)
                }
              </ul>
            )
            : <h2>暂无评论，点击左侧添加评论！！！</h2>
        }
      </div>
    )
  }
}

export default CommentList;