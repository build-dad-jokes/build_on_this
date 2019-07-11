import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';
import { withRouter } from 'react-router-dom';


export class Register extends Component {
    state = {
      username: '',
      password: ''
    };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.onSubmit}>
            <h1>Sign up!</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.auth
}

export default withRouter(connect(mapStateToProps, { registerUser })(Register));