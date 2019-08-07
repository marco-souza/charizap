/**
 * NOTE: this file is the reducer, function which effectively changes
 * redux state.
 */
import {
  LOGIN,
  LOGOUT,
  IS_LOGGED,
  VALIDATE_AUTH_KEY,
} from './constants'

export const initialState = {
  isLogged: false,
  loading: {
    authKey: false
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
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

    default:
      return state
  }
}
