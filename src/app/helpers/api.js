import { of } from 'rxjs'
import { catchError, map, mapTo } from 'rxjs/operators'

import { request, hasCookies, refreshHandler } from 'app/helpers/request'

export const apiRequest = (url, options, callbackSuccess, callbackError) => {
  const ajaxRequest = request(url, options)

  return ajaxRequest.pipe(
    map(callbackSuccess),
    catchError(err => {
      switch (err.status) {
        // Refresh keys
        case 401:
        case 403:
          return !hasCookies()
            ? of(callbackError(err.message))
            : refreshHandler().pipe(
              mapTo(ajaxRequest)
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
