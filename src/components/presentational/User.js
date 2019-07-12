import React from 'react';
import {deleteUser} from '../../actions';
import { connect } from 'react-redux';
import './styles.css'
import userimg from '../../user1profilepic.jpg'

const User = props => {
    return (
      <div className="card-group">
        <div className="card">
          <img className="card-img-top img-responsive" 
          src={userimg}
          alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.username}</h5>
            <p className="card-text">User Name: {props.username}</p>

              
            <button onClick={() => props.deleteUser(props.id)}>Delete</button>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default connect(null, { deleteUser })(User);