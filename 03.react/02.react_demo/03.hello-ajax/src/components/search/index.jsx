import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired
  }
  
  updateSearchName = () => {
    //获取用户输入
    const searchName = this.msgInput.value.trim();
    //更新
    this.props.update(searchName);
  }
  
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={input => this.msgInput = input}/>
          <button onClick={this.updateSearchName}>Search</button>
        </div>
      </section>
    )
  }
}

export default Search;