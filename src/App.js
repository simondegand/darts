import logo from './logo.svg';
import './App.css';
import Target from './Target';
import Following from './Following';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayFollower: true,
      followerX: 0,
      followerY:0
    }
    this.mouseMoved = this.mouseMoved.bind(this);
  }

  render(){
    const {displayFollower, followerX, followerY} = this.state;
    return (
      <>
        <Target size={500} arcThickness={30} mouseMoved={this.mouseMoved}/>
        <Following display={displayFollower} x={followerX} y={followerY} mouseMoved={this.mouseMoved}/>
      </>
    );
  }

  mouseMoved(x, y){
    this.setState({followerX : x, followerY: y})
  }
}

export default App;
