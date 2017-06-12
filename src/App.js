import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';  


import logo from './logo.svg';
import './App.css';

import Appbar from './components/appbar';
import AppPaper from './components/apppaper';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>   
        <div className="App">
          <Appbar />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Formulario de Contacto</h2>
          </div>
          <p className="App-intro">
            <AppPaper/>
            
          </p>
        </div>
      </MuiThemeProvider>   
    );
  }
}




export default App;
