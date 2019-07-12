
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { withRouter } from 'react-router-dom';
import './styles.css'
import SearchBar from './SearchBar'

export class NavigationBar extends Component {
    logout = (e) => {
      this.props.logout();
      this.props.history.push('/');
    }
  
    render() {

      const userLinks = (
        <nav>
          <a><a href="#" onClick={this.logout}>Logout</a></a>
          <a><Link to="/welcome">Jokes</Link></a>
          <a><Link to="/users">User List</Link></a>
          <a><Link to="/add-joke">Add Joke</Link></a>
          <SearchBar />
        </nav>
      );
  
      const guestLinks = (
          <nav>
            <a><Link to="/" >Home</Link></a>
            <a><Link to="/register">Register</Link></a>
            <a><Link to="/login">Login</Link></a>
            <SearchBar />
    
          </nav>
      );
  
      return (
          <nav>
            <div className="container-fluid">
              {/* <div className="navbar-header">
                <Link to="/" className="navbar-brand">Dad Jokes</Link>
              </div> */}
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
  