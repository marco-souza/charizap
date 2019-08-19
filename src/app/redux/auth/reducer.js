/**
 * NOTE: this file is the reducer, function which effectively changes
 * redux state.
 */
import {
  LOGIN,
  LOGOUT,
  SIGN_UP,
  IS_LOGGED,
  SET_ERRORS,
  SET_SIGNUP_DONE,
  VALIDATE_AUTH_KEY,
} from './constants'

export const initialState = {
  isLogged: false,
  signupDone: false,
  loading: {
    authKey: false
  },
  errorResponse: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
    case SIGN_UP:
    case VALIDATE_AUTH_KEY:
      return {
        ...state,
        loading: {
          authKey: true,
        },
      }

    case IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
        loading: {
          authKey: false,
        },
      }

    case SET_ERRORS:
      return {
        ...state,
        errorResponse: action.payload,
        loading: {
          authKey: false,
        },
      }

    case SET_SIGNUP_DONE:
      return {
        ...state,
        signupDone: action.payload,
        loading: {
          authKey: false,
        },
      }

    default:
      return state
  }
}
