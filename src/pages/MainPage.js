import React from 'react';
import Target from '../components/Target';
import Following from '../components/Following';
import SelectedPoints from '../components/SelectedPoints';
import { Point } from '../others/utils';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayFollower: false,
            followerX: 0,
            followerY:0,
            zoomX: 0,
            zoomY:0,
            followerColor: '#fff',
            followerPoints: 0,
            offSet: new Point(0,0)
        }
        this.mouseMoved = this.mouseMoved.bind(this);
        this.hideFollower = this.hideFollower.bind(this);
        this.zoomSize = 100;
    }

    render(){
        const {displayFollower, followerX, followerY, zoomX, zoomY, followerColor, followerPoints, offSet} = this.state;
        return  <>
            <Target size={500} arcThickness={30} mouseMoved={this.mouseMoved} mouseLeaving={this.hideFollower} setOffSet={this.setOffSet.bind(this)} offSet={offSet}/>
            <Following display={displayFollower} 
              zoomX={zoomX} 
              zoomY={zoomY} 
              x={followerX} 
              y={followerY} 
              mouseMoved={this.mouseMoved} 
              size={this.zoomSize} 
              mouseEnter={this.hideFollower} 
              color={followerColor} 
              points={followerPoints}
              offSet={offSet} />
            <SelectedPoints/>
        </>;
    }

    setOffSet(event){
        this.setState({offSet: new Point(event.currentTarget.getBoundingClientRect().x, event.currentTarget.getBoundingClientRect().y)});
    }

    mouseMoved(x, y, points, color){
      if(typeof points === 'undefined') points = this.state.followerPoints;
      if (typeof color === 'undefined') color = this.state.followerColor;
      let zoomX = x;
      let zoomY = y;
      if(x > this.zoomSize/2) zoomX = x - (this.zoomSize/2);
      else zoomX = 0;
      if(y > (this.zoomSize + 20)){
        zoomY = y - this.zoomSize - 20;
      }
      else zoomY += 20;
      this.setState({zoomX : zoomX, zoomY: zoomY, followerX: x, followerY: y, displayFollower: true, followerPoints: points, followerColor: color});
    }
  
    hideFollower(){
      this.setState({displayFollower: false});
    }
}

export default MainPage;