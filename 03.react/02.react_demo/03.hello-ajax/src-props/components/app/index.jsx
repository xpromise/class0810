import React, {Component} from 'react';

import Search from '../search';
import List from '../list';

class App extends Component {
  state = {
    searchName: ''
  }
  
  update = newSearchName => {
    this.setState({
      searchName: newSearchName
    })
  }
  
  render () {
    const {searchName} = this.state;
    return (
      <div className="container">
        <Search update={this.update}/>
        <List searchName={searchName}/>
      </div>
    )
  }
}

export default App;