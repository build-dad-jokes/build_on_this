import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { logout } from "../../actions";
import { withRouter } from "react-router-dom";
import "./styles.css";
import SearchBar from "./SearchBar";

export class NavigationBar extends Component {
  logout = e => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    const userLinks = (
      <ul className="nav">
        <li>
          <Link to="/welcome">Jokes</Link>
        </li>
        <li>
          <Link to="/users">User List</Link>
        </li>
        <li>
          <Link to="/add-joke">Add Joke</Link>
        </li>
        <li>
          <Link to="/saved-jokes">Saved Jokes</Link>
        </li>
        <li>
          <a href="#" onClick={this.logout}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <nav>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Dad Jokes
            </Link>
          </div>
          <div>{this.props.loggedIn ? userLinks : guestLinks}</div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state.auth;
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { logout }
  )
)(NavigationBar);
