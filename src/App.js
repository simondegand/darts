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
      displayFollower: false,
      followerX: 0,
      followerY:0,
      followerColor: '#fff',
      followerPoints: 0
    }
    this.mouseMoved = this.mouseMoved.bind(this);
    this.hideFollower = this.hideFollower.bind(this);
    this.zoomSize = 200;
  }

  render(){
    const {displayFollower, followerX, followerY, followerColor, followerPoints} = this.state;
    return (
      <>
        <Target size={500} arcThickness={30} mouseMoved={this.mouseMoved} mouseLeaving={this.hideFollower}/>
        <Following display={displayFollower} x={followerX} y={followerY} size={this.zoomSize} mouseMoved={this.hideFollower} color={followerColor} points={followerPoints} />
      </>
    );
  }

  mouseMoved(x, y, points, color){
    if(x > this.zoomSize/2) x = x - (this.zoomSize/2);
    else x = 0;
    if(y > (this.zoomSize + 20)){
      y = y - this.zoomSize - 20;
    }
    else y += 20;
    this.setState({followerX : x, followerY: y, displayFollower: true, followerPoints: points, followerColor: color});
  }

  hideFollower(){
    this.setState({displayFollower: false});
  }
}

export default App;
