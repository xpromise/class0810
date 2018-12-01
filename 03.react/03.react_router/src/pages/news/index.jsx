import React, {Component} from 'react';

class News extends Component {
  state = {
    news: []
  }
  
  componentDidMount () {
    console.log('componentDidMount()');
    //模拟发送请求
    setTimeout(() => {
      this.setState({
        news: ['news001', 'news003', 'news005']
      })
    }, 1000)
  }
  
  render () {
    return (
      <ul>
        {
          this.state.news.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    )
  }
}

export default News;