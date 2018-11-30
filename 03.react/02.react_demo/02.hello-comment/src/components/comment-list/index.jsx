import React, {Component} from 'react';
import PubSub from 'pubsub-js';
//引入单个评论组件
import CommentItem from '../comment-item';

class CommentList extends Component {
  state = {
    comments: [
      {
        name: 'Jack',
        content: 'I Love Rose'
      },
      {
        name: 'Rose',
        content: 'I Love 老王'
      }
    ]
  }
  
  componentDidMount () {
    PubSub.subscribe('ADD COMMENT', (msg, data) => {
      this.setState({
        comments: [data, ...this.state.comments]
      })
    })
  }
  
  del = delIndex => {
    this.setState({
      comments: this.state.comments.filter((item, index) => delIndex !== index)
    })
  }
  
  render () {
    const {comments} = this.state;
    
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {
          comments.length
            ? (
              <ul className="list-group">
                {
                  comments.map((comment, index) => <CommentItem key={index} comment={comment} del={this.del} index={index}/>)
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