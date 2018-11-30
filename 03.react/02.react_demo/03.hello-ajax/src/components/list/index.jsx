import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
   searchName: PropTypes.string.isRequired
  }
  
  componentWillReceiveProps (props) {
    console.log(this.props);
    console.log(props);
    console.log('componentWillReceiveProps()');
  }
  
  render () {
    return (
      <div className="row">
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    )
  }
}

export default List;