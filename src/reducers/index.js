import { combineReducers } from 'redux'

import authReducer from './auth'; 
import jokesReducer from './jokes';
import usersReducer from './users';

export default combineReducers({
  auth: authReducer,
  jokes: jokesReducer,
  user: usersReducer
})

