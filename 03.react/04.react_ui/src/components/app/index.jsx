import React, {Component} from 'react';
import {Button, Toast, Grid } from 'antd-mobile';

import img from './1.png';

class App extends Component {
  
  handleClick = e => {
    console.log(e);
    // alert('点击了按钮');
    Toast.success('Load success !!!', 2);
  }
  
  render () {
    const data = Array.from(new Array(8)).map((item, index) => ({
      icon: (<img src={img} style={{width: '60px', height: '60px'}}/>),
      text: `名字${index}`
    }))
    return (
      <div>
        <Button>default</Button>
        <Button onClick={this.handleClick} type='primary'>default</Button>
        <Button type='warning'>default</Button>
        <Grid data={data} activeStyle={false} columnNum={5}/>
      </div>
    )
  }
}

export default App;