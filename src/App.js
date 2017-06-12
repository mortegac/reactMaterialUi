import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';  
import RaisedButton from 'material-ui/RaisedButton'; 

import logo from './logo.svg';
import './App.css';

import Appbar from './components/appbar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>   
        <div className="App">
          <Appbar />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <RaisedButton label="Default" />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>   
    );
  }
}

export default App;
