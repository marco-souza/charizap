/**
 * NOTE: Epics are used to take care of side-effects in redux.
 * They are action streamers which can be subscribed.
 *
 * Refs: [rxjs, redux-observable]
 */
import pick from 'lodash/pick'
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

const COOKIE_KEY = 'access_token'
const COOKIE_REFRESH_KEY = 'refresh_token'

// TODO: Make function to generate requests
const HEADER_TEMPLATE = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

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
    body: pick(action.payload, ['email', 'name', 'password']),
    headers: HEADER_TEMPLATE,
  })),
  map(() => isLogged(false)),
  catchError(handleRequestErrors),
)

export const login = (action$, state$) => action$.pipe(
  ofType(LOGIN),
  mergeMap(action => ajax({
    method: 'POST',
    url: api.login(),
    body: pick(action.payload, ['email', 'password']),
    headers: HEADER_TEMPLATE,
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
  mergeMap(action => ajax({
    method: 'GET',
    url: api.logout(),
    headers: HEADER_TEMPLATE,
    xhrFields: {
      withCredentials: true
    }
  }).pipe(
    map(() => isLogged(false)),
    tap([COOKIE_KEY, COOKIE_REFRESH_KEY].map(eraseCookie)),
  )),
  catchError(handleRequestErrors),
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
