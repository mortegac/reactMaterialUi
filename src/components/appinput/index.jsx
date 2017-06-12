import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import AppCarga from '../appcarga'

import './style.css';


class AppInput extends Component {
  state = {open: false, text: '', text_error_text: null, disabled: true};

  constructor(props) {
    super(props)
    this.label = "Enviar";
    this.state = {
      loading: false,
    }
    
  }
/******** */
handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    isDisabled() {
        console.log("VALIDANDO");
        // if (this.state.text === "") {
        //     this.setState({
        //         text_error_text: null
        //     });
        // } 
    }


    changeValue(e, type) {
        console.log("CAMPO: " + e.target.value);
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }
/****** */
  updateNombre(x) {
      console.log(x);
    this.setState({
      name: x.target.value
    })
    
  }
  toggleLoading() {
    this.state.loading ? this.label = "Enviar" : this.label = "en proceso .." 
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {
    return (
        <div>
        <form onSubmit={() => {}}>
            <TextField className="bloque fondorojo"
            hintText=""
            floatingLabelText="Nombre"
            floatingLabelFixed={true}
            onChange={(x) => this.updateNombre(x)} type="text"
            />
            <br />
            <TextField
            hintText=" "
            floatingLabelText="Apellidos"
            floatingLabelFixed={true}
            type="text"
            errorText={this.state.text_error_text}
            onChange={e => this.changeValue(e, 'text')}
            onBlur={this.isDisabled} 
            /><br />
        </form>

        <RaisedButton label={this.label} onClick={() => this.toggleLoading()}/>
            {this.state.loading ? <div className="box"><br /><AppCarga/></div> : null }
        </div>


   
    )
  }
}

/*
   <div>
        <form onSubmit={() => {}}>
          <input placeholder="Nombre" onChange={(x) => this.updateNombre(x)} type="text"/>
          <input placeholder="Apellido" onChange={(x) => this.updateApellido(x)} type="text"/>
        </form>
        <button onClick={() => this.toggleLoading()}>Enviar</button>
        {this.state.loading ? <div>Cargando...</div> : null}
      </div>
 */
export default AppInput;
/* 
 <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    />
<TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    /><br />
<TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
*/