
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { withRouter } from 'react-router-dom';


export class NavigationBar extends Component {
    logout = (e) => {
      this.props.logout();
      this.props.history.push('/');
    }
  
    render() {

      const userLinks = (
        <ul>
          <li><a href="#" onClick={this.logout}>Logout</a></li>
          <li><Link to="/welcome">Jokes</Link></li>
          <li><Link to="/users">User List</Link></li>
          <li><Link to="/add-joke">Add Joke</Link></li>
    
        </ul>
      );
  
      const guestLinks = (
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      );
  
      return (
          <nav>
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Dad Jokes</Link>
              </div>
              <div>
                {
                  this.props.loggedIn 
                  ? userLinks 
                  : guestLinks
                }
              </div>
            </div>
          </nav>
      );
    }
  }


function mapStateToProps(state) {
    return state.auth
}
  
export default compose(withRouter,
    connect(mapStateToProps, { logout }))(NavigationBar)
  