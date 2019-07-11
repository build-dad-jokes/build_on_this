import {
  FETCH_ALL_JOKES_START, 
  FETCH_ALL_JOKES_SUCCESS, 
  FETCH_ALL_JOKES_FAILURE, 
  DELETE_JOKE_START, 
  DELETE_JOKE_SUCCESS, 
  DELETE_JOKE_FAILURE,
  FETCH_PUBLICJOKES_START,
  FETCH_PUBLICJOKES_SUCCESS,
  FETCH_PUBLICJOKES_FAILURE
} from '../actions'

const INITIAL_STATE = {
    fetching: false,
    errors: [],
    jokes: [],
    deletingJoke: false
  };

export default function jokesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case FETCH_ALL_JOKES_START:
        return {
          ...state,
          fetching: true
        }
      case FETCH_ALL_JOKES_SUCCESS:
        return {
          ...state, 
          fetching: false,
          jokes: action.payload
        }
      case FETCH_ALL_JOKES_FAILURE:
        return {
          ...state,
          fetching: false,
          errors: action.payload
        }
      case FETCH_PUBLICJOKES_START:
        return {
          ...state,
          fetching: true
        }
      case FETCH_PUBLICJOKES_SUCCESS:
        return {
          ...state, 
          fetching: false,
          jokes: action.payload
        }
      case FETCH_PUBLICJOKES_FAILURE:
        return {
          ...state,
          fetching: false,
          errors: action.payload
        }
      case DELETE_JOKE_START:
        return {
          ...state,
          deletingJoke: true
        }
      case DELETE_JOKE_SUCCESS:
        const { jokes } = state;
        const filteredJokes = jokes.filter(joke => {
              return joke.id !== action.payload;
        });
         
        return {
          ...state,
          deletingJoke: false,
          jokes: [ ...filteredJokes ]
        }
      case DELETE_JOKE_FAILURE:
        return {
          ...state,
          deletingJoke: false,
          errors: action.payload
        }
      default:
        return state;
    }
  }