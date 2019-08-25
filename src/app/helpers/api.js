import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, map, mapTo } from 'rxjs/operators'

import { getCookie, setCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'

const BASE_URL = process.env.API_BASE_URL
const defaultHeaders = () => ({
  Accept: 'application/json',
  Authorization: `Bearer ${getCookie(COOKIE_KEY)}`,
  'Content-Type': 'application/json',
})

export const cookieHandler = ({ response }) => {
  setCookie(COOKIE_KEY, response.access_token)
  setCookie(COOKIE_REFRESH_KEY, response.refresh_token)
}

export const refreshHandler = () => {
  const refreshRequest = ajax({
    method: 'POST',
    url: `${BASE_URL}/users/refresh-token`,
    body: { refresh_token: getCookie(COOKIE_REFRESH_KEY) },
  })

  return refreshRequest
    .pipe(map(cookieHandler))
}

export const request = (url, options, callbackSuccess, callbackError) => {
  const ajaxRequest = ajax({
    url: `${BASE_URL}${url}`,
    ...options,
    crossDomain: true,
    headers: {
      ...defaultHeaders(),
      ...options.header,
    }
  })

  return ajaxRequest.pipe(
    map(callbackSuccess),
    catchError(err => {
      const hasCookie = !getCookie(COOKIE_REFRESH_KEY)
      switch (err.status) {
        // Refresh keys
        case 401:
        case 403:
          return hasCookie
            ? of(callbackError(err.response))
            : refreshHandler().pipe(
              mapTo(ajaxRequest)
            )

        default:
          return of(callbackError(err.response))
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
