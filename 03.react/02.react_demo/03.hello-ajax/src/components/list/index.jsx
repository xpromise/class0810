import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class List extends Component {
  static propTypes = {
   searchName: PropTypes.string.isRequired
  }
  
  state = {
    init: true,
    loading: false,
    success: null,
    error: false
  }
  
  componentWillReceiveProps (props) {
    /*console.log(this.props);
    console.log(props);
    console.log('componentWillReceiveProps()');*/
    //将页面改为loading显示
    this.setState({
      init: false,
      loading: true
    })
    //发送ajax请求
    axios.get(`https://api.github.com/search/users?q=${props.searchName}`)
      .then(res => {
        //请求成功
        //将页面显示查找到用户内容
        this.setState({
          loading: false,
          success: res.data.items.map(item => ({name: item.login, url: item.html_url, image: item.avatar_url}))
        })
      })
      .catch(err => {
        setTimeout(() => {
          this.setState({
            loading: false,
            success: null,
            error: true
          })
        }, 1000)
      })
  }
  
  render () {
    const {init, loading, success, error} = this.state;
    if (init) {
      return <h1>enter name to search</h1>;
    } else if (loading) {
      return <h1>loading...</h1>;
    } else if (success) {
      return (
        <div className="row">
          {
            success.map((item, index) => (
              <div className="card" key={index}>
                <a href={item.url} target="_blank">
                  <img src={item.image} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{item.name}</p>
              </div>
            ))
          }
        </div>
      )
    } else if (error) {
      return <h1>网络错误，请刷新重试~</h1>;
    }
  }
}

export default List;