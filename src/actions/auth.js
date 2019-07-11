import axios from 'axios';
import jwtDecode from 'jwt-decode';

const BASE_URL = 'https://bw-dad-jokes.herokuapp.com';

export const REGISTER_USER_START = "REGISTER_USER_START"
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE"

export const registerUser = (user) => dispatch => {
    dispatch({ type: REGISTER_USER_START });

    axios.post(`${BASE_URL}/auth/register`, user)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_USER_FAILURE,
                payload: err
            })
        console.log(err)
        })
}

export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE"

export const loginUser = (user) => dispatch => {
dispatch({ type: LOGIN_USER_START });
axios
    .post(`${BASE_URL}/auth/login`, user)
    .then(res => {
        localStorage.setItem('jwt', res.data.token);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: jwtDecode(res.data.token)
        })
        
    })
    .catch(err => { 
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: err
        })
    })
}

export const LOGOUT_USER = "LOGOUT_USER"

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}