import React, { Component } from 'react';
import './LoginForm.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser, logout } from '../../actions';


export class LoginForm extends Component {
    state = {
      username: '',
      password: '',
    };
    
  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
      setTimeout(() => {   
       if(this.props.currentUser !== null) {
       this.props.history.push('/welcome');
        } 
      }, 3000);
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      
  <form onSubmit={this.onSubmit}>
    <div className="form-group">
      <label>Username</label>
      <input 
        className="form-control" 
        type="text" 
        name="username" 
        value={username} 
        onChange={this.onChange} 
        placeholder="password" 
      />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input 
        className="form-control" 
        type="password" 
        name="password" 
        value={password} 
        onChange={this.onChange} 
        placeholder="password" 
      />
    </div>
    <button type="submit" className="btn btn-black">Login</button>

  </form> 
      );
    }
  }
  
const mapStateToProps = state => {
    return state.auth
}

export default compose(withRouter,
    connect(mapStateToProps, { loginUser, logout }))(LoginForm)
