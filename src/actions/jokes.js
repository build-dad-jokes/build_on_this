import axios from 'axios';

export const FETCH_JOKE_START =  "FETCH_JOKE_START"
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS"
export const FETCH_JOKE_FAILURE = "FETCH_JOKE_FAILURE"

export const FETCH_ALL_JOKES_START =  "FETCH_ALL_JOKES_START"
export const FETCH_ALL_JOKES_SUCCESS = "FETCH_ALL_JOKES_SUCCESS"
export const FETCH_ALL_JOKES_FAILURE = "FETCH_ALL_JOKES_FAILURE"

export const FETCH_PUBLICJOKES_START = "FETCH_ALL_PUBLICJOKES_START"
export const FETCH_PUBLICJOKES_SUCCESS = "FETCH_ALL_PUBLICJOKES_SUCCESS"
export const FETCH_PUBLICJOKES_FAILURE = "FETCH_ALL_PUBLICJOKES_FAILURE"

export const ADD_JOKE_START = "ADD_JOKE_START"
export const ADD_JOKE_SUCCESS = "ADD_JOKE_SUCCESS"
export const ADD_JOKE_FAILURE = "ADD_JOKE_FAILURE"

export const UPDATE_JOKE_START = "UPDATE_JOKE_START"
export const UPDATE_JOKE_SUCCESS = "UPDATE_JOKE_SUCCESS"
export const UPDATE_JOKE_FAILURE = "UPDATE_JOKE_FAILURE"

export const DELETE_JOKE_START="DELETE_JOKE_START"
export const DELETE_JOKE_SUCCESS="DELETE_JOKE_SUCCESS"
export const DELETE_JOKE_FAILURE="DELETE_JOKE_FAILURE"



const BASE_URL = 'https://bw-dad-jokes.herokuapp.com';

export const fetchJokeById = (id) => (dispatch) => {
    dispatch({type: FETCH_JOKE_START })
    const token = {
        headers: {authorization: localStorage.getItem('jwt')}
    }

    axios
        .get(`${BASE_URL}/api/jokes/${id}`, token)
        .then(res => {
            dispatch({
                type: FETCH_JOKE_SUCCESS,
                payload: res
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_JOKE_FAILURE,
                payload: err
            })
        })
}

export const fetchAllJokes = () => (dispatch) => {
    const token = {
        headers: { authorization: localStorage.getItem('jwt') }
    }
        dispatch({ type: FETCH_ALL_JOKES_START })
        axios
            .get(`${BASE_URL}/api/jokes`, token)
            .then(res => {
                dispatch({
                    type: FETCH_ALL_JOKES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_ALL_JOKES_FAILURE,
                    payload: err
                })
            })
    }

export const fetchPublicJokes = () => (dispatch) => {
        dispatch({ type: FETCH_PUBLICJOKES_START })
        axios
            .get(`${BASE_URL}/api/jokes`)
            .then(res => {
                dispatch({
                    type: FETCH_PUBLICJOKES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_PUBLICJOKES_FAILURE,
                    payload: err
                })
            })
}

export const addJoke = (sentJoke) => dispatch => {
    dispatch({ type:ADD_JOKE_START });
    const sentToken = {
        headers: {authorization: localStorage.getItem('jwt')}
    }
    axios.post(`${BASE_URL}/api/jokes`, sentJoke, sentToken)
        .then(res => {
            dispatch({
                type: ADD_JOKE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_JOKE_FAILURE,
                payload: err
            })
        console.log(err)
        })
}

export const updateJoke = (id, changes) => dispatch => {
    dispatch({type: UPDATE_JOKE_START});
    const sendToken = {
        headers: { authorization: localStorage.getItem('jwt') }
    }

    axios
      .put(`${BASE_URL}/api/jokes${id}`, changes, sendToken)
      .then(res => {
          dispatch({
              type: UPDATE_JOKE_SUCCESS,
              payload: res.data
          })
      })
      .catch(err => dispatch({
          type: UPDATE_JOKE_FAILURE,
          payload: err
      }))
}

export const deleteJoke = (id) => dispatch => {
    dispatch({ type: DELETE_JOKE_START});
    const sendToken = {
        headers: {authorization: localStorage.getItem('jwt')}
    }
    axios
      .delete(`${BASE_URL}/api/jokes/${id}`, sendToken)
      .then(res =>{
        dispatch({
          type: DELETE_JOKE_SUCCESS,
          payload: id
        })
      })
      .catch(err => dispatch({
        type: DELETE_JOKE_FAILURE,
        payload: err
      }))
  }

