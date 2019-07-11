import axios from 'axios';

const BASE_URL = 'https://bw-dad-jokes.herokuapp.com';


// READ

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


export const fetchAllUsers = () => (dispatch) => {
    dispatch({ type: FETCH_USERS_START });
    const sendToken = {
      headers: { authorization: localStorage.getItem('jwt') }
    }
    axios
      .get(`${BASE_URL}/api/users`, sendToken)
      .then(res => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: res.data.users
        })
      })
      .catch(err => dispatch({
        type: FETCH_USERS_FAILURE,
        payload: err  
      }))
  }

  export const FETCH_USER_START = "FETCH_USER_START"
  export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
  export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"


  export const fetchUserById = (id) => (dispatch) => {
    dispatch({type: FETCH_USER_START })
    const sendToken = {
      headers: { authorization: localStorage.getItem('jwt') }
  }
    axios
        .get(`${BASE_URL}/api/users/${id}`, sendToken)
        .then(res => {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: res
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_USER_FAILURE,
                payload: err
            })
        })
}

// UPDATE

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const updateUser = (id, changes) => dispatch => {
  dispatch({ type: UPDATE_USER_START});
  const sendToken = {
      headers: { authorization: localStorage.getItem('jwt') }
  }
  axios
    .put(`${BASE_URL}/api/users/${id}`, changes, sendToken)
    .then(res =>{
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({
      type: UPDATE_USER_FAILURE,
      payload: err
    }))
}

// DELETE

export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';


export const deleteUser = (id) => dispatch => {
  dispatch({ type: DELETE_USER_START});
  const sendToken = {
      headers: { authorization: localStorage.getItem('jwt') }
  }
  axios
    .delete(`${BASE_URL}/api/users/${id}`, sendToken)
    .then(res =>{
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: id
      })
    })
    .catch(err => dispatch({
      type: DELETE_USER_FAILURE,
      payload: err
    }))
}




