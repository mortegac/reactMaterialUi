This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

INSTALAR CREATE-REACT-APP:
```
npm install -g create-react-app
```
Crear la App:
```
create-react-app app
cd Myapp
npm start
```
### INSTALACION MTERIAL UI:
```
npm install --save material-ui react-tap-event-plugin
```
## Agregar en el archivo src/index.js
```
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import injectTapEventPlugin from 'react-tap-event-plugin';  
import App from './App'; 
import './index.css';  

injectTapEventPlugin();  

ReactDOM.render(   
                  <App />,   
                  document.getElementById('root') 
);
```
## Agregar en el archivo src/App.js
```
import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';  
import RaisedButton from 'material-ui/RaisedButton'; 
import './App.css';  
class App extends Component {    
        render() {     
            return (     
                <MuiThemeProvider>       
                  <div className="App">         
                     <RaisedButton label="Default" />       
                  </div>      
                </MuiThemeProvider>     
                   );   
                } 
         }  

export default App;
```