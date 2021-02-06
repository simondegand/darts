import './css/App.css'
import Target from './components/Target';
import Following from './components/Following';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import SelectedPoints from './components/SelectedPoints';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PlayersPage from './pages/PlayersPage';
import TargetPage from './pages/TargetPage';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayFollower: false,
      followerX: 0,
      followerY:0,
      zoomX: 0,
      zoomY:0,
      followerColor: '#fff',
      followerPoints: 0
    }
    this.mouseMoved = this.mouseMoved.bind(this);
    this.hideFollower = this.hideFollower.bind(this);
    this.zoomSize = 100;
  }

  render(){
    const {displayFollower, followerX, followerY, zoomX, zoomY, followerColor, followerPoints} = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <PlayersPage/>
            </Route>
            <Route path="/target">
              <TargetPage/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
  
  // <Target size={500} arcThickness={30} mouseMoved={this.mouseMoved} mouseLeaving={this.hideFollower}/>
  // <Following display={displayFollower} zoomX={zoomX} zoomY={zoomY} x={followerX} y={followerY} mouseMoved={this.mouseMoved} size={this.zoomSize} mouseEnter={this.hideFollower} color={followerColor} points={followerPoints} />
  // <SelectedPoints/>

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

export default App;
