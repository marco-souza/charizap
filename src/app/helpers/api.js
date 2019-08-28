import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'

import { request, hasCookies, refreshHandler, deleteCookies } from 'app/helpers/request'
import { isLogged } from 'app/redux/auth/constants'

export const apiRequest = (url, options, callbackSuccess, callbackError) => {
  return request(url, options).pipe(
    map(callbackSuccess),
    catchError(err => {
      switch (err.status) {
        case 401:
          return !hasCookies()
            ? of(callbackError(err.message))
            : refreshHandler().pipe(
              switchMap(() => apiRequest(url, options, callbackSuccess, callbackError)),
              catchError(err => {
                // NOTE: if fail to refresh token, logout user
                deleteCookies()
                return of(
                  callbackError(err.message),
                  isLogged(false),
                )
              }),
            )

        default:
          return of(callbackError(err.message))
      }
    }),
  )
}

export default {
  signUp: (body, callbackSuccess, callbackError) => apiRequest(
    '/users/signup',
    { method: 'POST', body },
    callbackSuccess,
    callbackError,
  ),
  login: (body, callbackSuccess, callbackError) => apiRequest(
    '/users/login',
    { method: 'POST', body },
    callbackSuccess,
    callbackError,
  ),
  logout: (callbackSuccess, callbackError) => apiRequest(
    '/users/logout',
    { xhrFields: { withCredentials: true } },
    callbackSuccess,
    callbackError,
  ),
}
