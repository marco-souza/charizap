/**
 * NOTE: Epics are used to take care of side-effects in redux.
 * They are action streamers which can be subscribed.
 *
 * Refs: [rxjs, redux-observable]
 */
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { ofType, combineEpics } from 'redux-observable'
import { tap, map, delay, mergeMap, catchError } from 'rxjs/operators'

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
const COOKIE_REFRESH_KEY = 'refresh_key'

// TODO: make it a helper
const handleRequestErrors = error => {
  console.log(error)
  // TODO: handle Unauthenticated error
  // TODO: call notification with error message
  return of(isLogged(false))
}

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
  })),
  map(() => isLogged(false)),
  catchError(handleRequestErrors),
)

export const login = (action$, state$) => action$.pipe(
  ofType(LOGIN),
  mergeMap(action => ajax({
    method: 'POST',
    url: api.login(),
    body: {
      email: action.payload.email,
      password: action.payload.password,
    },
  }).pipe(
    map(({ response }) => {
      setCookie(COOKIE_KEY, response.access_token, 0)
      setCookie(COOKIE_REFRESH_KEY, response.refresh_token, 0)
    }),
    map(() => isLogged(true)),
  )),
  catchError(handleRequestErrors),
)

export const logout = (action$, state$) => action$.pipe(
  ofType(LOGOUT),
  // TODO: map to a logout request
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
  catchError(handleRequestErrors),
)

export default combineEpics(
  validateAuthKey,
  logout,
  login,
  signup
)
