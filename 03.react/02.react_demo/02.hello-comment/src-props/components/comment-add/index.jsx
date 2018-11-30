import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  }
  
  state = {
    name: '',
    content: ''
  }
  
  handleUsername = e => {
    const value = e.target.value.trim();
    //过滤空数据
    if (!value) return;
    //更新状态
    this.setState({name: value});
  }
  
  handleContent = e => {
    const value = e.target.value.trim();
    //过滤空数据
    if (!value) return;
    //更新状态
    this.setState({content: value});
  }
  
  addComment = () => {
    //获取当前用户填写的信息
    const {name, content} = this.state;
    //更新comments
    this.props.add({name, content});
    //清空用户填写数据
    this.setState({name: '', content: ''});
  }
  
  render () {
    //获取当前状态
    const {name, content} = this.state;
    
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" value={name} onChange={this.handleUsername}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleContent}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentAdd;