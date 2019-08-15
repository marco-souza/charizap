/**
 * NOTE: Epics are used to take care of side-effects in redux.
 * They are action streamers which can be subscribed.
 *
 * Refs: [rxjs, redux-observable]
 */
import { ajax } from 'rxjs/ajax'
import { tap, map, delay, mergeMap } from 'rxjs/operators'
import { ofType, combineEpics } from 'redux-observable'

import { getCookie, setCookie, eraseCookie } from 'app/helpers/cookie'
import api from 'app/helpers/api'

import {
  // Actions
  isLogged,
  // Types
  LOGIN,
  LOGOUT,
  VALIDATE_AUTH_KEY,
  SIGN_UP,
} from './constants'

const COOKIE_KEY = 'auth_key'

export const signup = action$ => action$.pipe(
  ofType(SIGN_UP),
  tap(console.log),
  mergeMap(action => ajax({
    method: 'POST',
    url: api.signUp(),
    body: {
      email: action.payload.email,
      name: action.payload.username,
      password: action.payload.password,
    },
  }).pipe(
    map(response => console.log(response)),
  ))
)

export const login = (action$, state$) => action$.pipe(
  ofType(LOGIN),
  // TODO: map to a request or cookie
  delay(1000),
  tap(({ payload }) => setCookie(COOKIE_KEY, payload, 1)),
  map(() => isLogged(true)),
)

export const logout = (action$, state$) => action$.pipe(
  ofType(LOGOUT),
  // TODO: map to a request or cookie
  delay(1000),
  tap(() => eraseCookie(COOKIE_KEY)),
  map(() => isLogged(false)),
)

export const validateAuthKey = (action$, state$) => action$.pipe(
  ofType(VALIDATE_AUTH_KEY),
  delay(1000),
  map(() => getCookie(COOKIE_KEY)),
  // TODO: map(authKey => authKey && api.isValidAuthKey),
  map(isValidKey => isLogged(Boolean(isValidKey))),
)

export default combineEpics(
  validateAuthKey,
  logout,
  login,
  signup
)
