import './css/App.css'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PlayersPage from './pages/PlayersPage';
import MainPage from './pages/MainPage';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {
    render(){
        return (
          <Provider store={store}>
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <PlayersPage/>
                      </Route>
                      <Route path="/target">
                          <MainPage/>
                      </Route>
                  </Switch>
              </Router>
          </Provider>
        );
    }
}

export default App;
