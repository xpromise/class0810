//引入依赖
import React, {Component} from 'react';

//引入添加评论组件
import CommentAdd from '../comment-add';
//引入评论列表组件
import CommentList from '../comment-list';

//定义组件
class App extends Component {
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
  
  add = comment => {
    //更新状态
    this.setState({
      comments: [comment, ...this.state.comments]
    })
  }
  
  del = delIndex => {
    this.setState({
      comments: this.state.comments.filter((item, index) => delIndex !== index)
    })
  }
  
  render () {
    //获取comments
    const {comments} = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={this.add}/>
          <CommentList comments={comments} del={this.del}/>
        </div>
      </div>
    )
  }
}

//暴露出去
export default App;