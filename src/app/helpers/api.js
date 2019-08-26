import { of, from, throwError } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { catchError, map, mapTo, switchMap } from 'rxjs/operators'

import { getCookie, setCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'

const BASE_URL = process.env.API_BASE_URL
const defaultHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  ...{
    ...(getCookie(COOKIE_KEY)
      ? { Authorization: `Bearer ${getCookie(COOKIE_KEY)}` }
      : {}
    )
  }
})

export const cookieHandler = response => {
  setCookie(COOKIE_KEY, response.access_token)
  setCookie(COOKIE_REFRESH_KEY, response.refresh_token)
}

export const refreshHandler = () => {
  const refreshRequest = fromFetch(`${BASE_URL}/users/refresh-token`, {
    method: 'POST',
    body: JSON.stringify({ refresh_token: getCookie(COOKIE_REFRESH_KEY) }),
  })

  return refreshRequest
    .pipe(map(cookieHandler))
}

export const request = (url, options, callbackSuccess, callbackError) => {
  const ajaxRequest = fromFetch(`${BASE_URL}${url}`, {
    ...options,
    body: JSON.stringify(options.body),
    headers: {
      ...defaultHeaders(),
      ...options.header,
    }
  }).pipe(
    switchMap(response => response.ok
      ? response.json()
      // handle error
      : from(response.json()).pipe(
        switchMap((message) => throwError({
          status: response.status,
          message
        }))
      )
    ),
  )

  return ajaxRequest.pipe(
    map(callbackSuccess),
    catchError(err => {
      const hasCookie = getCookie(COOKIE_REFRESH_KEY)
      switch (err.status) {
        // Refresh keys
        case 401:
        case 403:
          return !hasCookie
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
  signUp: (body, callbackSuccess, callbackError) => request(
    '/users/signup',
    { method: 'POST', body },
    callbackSuccess,
    callbackError,
  ),
  login: (body, callbackSuccess, callbackError) => request(
    '/users/login',
    { method: 'POST', body },
    callbackSuccess,
    callbackError,
  ),
  logout: (callbackSuccess, callbackError) => request(
    '/users/logout',
    { xhrFields: { withCredentials: true } },
    callbackSuccess,
    callbackError,
  ),
}
