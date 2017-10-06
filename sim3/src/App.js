import React, { Component } from 'react';
import './reset.css';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
                <div>
                    <Route component={Login} exact path='/' />
                    <Route component={Dashboard} path='/dashboard' />
                    {/* <Route component={Profile} path='/profile' />
                    <Route component={Search} path='/search' /> */}
                </div>
            </Router>
      </div>
    );
  }
}

export default App;
