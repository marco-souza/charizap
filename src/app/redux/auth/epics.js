/**
 * NOTE: Epics are used to take care of side-effects in redux.
 * They are action streamers which can be subscribed.
 *
 * Refs: [rxjs, redux-observable]
 */
import pick from 'lodash/pick'
import { ofType, combineEpics } from 'redux-observable'
import { tap, map, mergeMap } from 'rxjs/operators'

import { getCookie, eraseCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'
import api from 'app/helpers/api'

import {
  // Actions
  isLogged,
  setRequestErrors,
  setSignupDone,
  // Types
  LOGIN,
  LOGOUT,
  SIGN_UP,
  VALIDATE_AUTH_KEY,
} from './constants'

const closeLoader = () => isLogged(false)

export const signup = action$ => action$.pipe(
  ofType(SIGN_UP),
  tap(console.log),
  mergeMap(action =>
    api.signUp(
      pick(action.payload, ['email', 'name', 'password']),
      () => setSignupDone(true),
      setRequestErrors,
    ))
)

export const login = (action$, state$) => action$.pipe(
  ofType(LOGIN),
  mergeMap(action =>
    api.login(
      pick(action.payload, ['email', 'password']),
      () => isLogged(true),
      setRequestErrors,
    ))
)

export const logout = (action$, state$) => action$.pipe(
  ofType(LOGOUT),
  mergeMap(action => api.logout(
    () => setSignupDone(false),
    setRequestErrors,
  )
    .pipe(
      tap([COOKIE_KEY, COOKIE_REFRESH_KEY].map(eraseCookie)),
      map(closeLoader),
    )),
)

export const validateAuthKey = (action$, state$) => action$.pipe(
  ofType(VALIDATE_AUTH_KEY),
  map(() => getCookie(COOKIE_KEY)),
  map(isValidKey => isLogged(Boolean(isValidKey))),
)

export default combineEpics(
  validateAuthKey,
  logout,
  login,
  signup
)
