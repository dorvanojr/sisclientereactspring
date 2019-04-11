import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../css/login.css";
import App from './App';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };
  }

  validateForm() {

    <Redirect to='/home' />
    if(this.state.login == 'admin' && this.state.password == '123456'){
      
      return true;
    } if(this.state.login == 'comum' && this.state.password == '123456'){
    
      return true;
    } 
  }

  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
event.preventDefault();

if(this.state.login == 'admin' && this.state.password == '123456'){
      
  return this.props.history.push('/home');
} if(this.state.login == 'comum' && this.state.password == '123456'){

  return this.props.history.push('/leitura');
} 


  }

  render() {
    return (
     
      <div className="Login">
      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="login" bsSize="large">
            <ControlLabel>Usuario</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleSubmit}
            type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}