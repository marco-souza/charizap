import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'

import { getCookie, setCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'

const BASE_URL = process.env.API_BASE_URL
const defaultHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getCookie(COOKIE_KEY)}`,
})

export const cookieHandler = ({ response }) => {
  setCookie(COOKIE_KEY, response.access_token)
  setCookie(COOKIE_REFRESH_KEY, response.refresh_token)
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

  const refreshResquest = ajax({
    url: `${BASE_URL}/users/refresh`,
    method: 'POST',
    body: { refresh_token: getCookie(COOKIE_REFRESH_KEY) },
  })

  return ajaxRequest.pipe(
    map(callbackSuccess),
    catchError(err => {
      // Refresh keys
      if (err.status === 401) {
        return refreshResquest
          .pipe(
            map(cookieHandler),
            map(ajaxRequest),
          )
      }
      const test = callbackError(err.response)
      return of(test)
    }),
  )
}

export default {
  signUp: (body, callbackError) => request(
    '/users/signup',
    { method: 'POST', body },
    callbackError
  ),
  login: (body, callbackError) => request(
    '/users/login',
    { method: 'POST', body: { bla: 'break' } },
    callbackError
  ),
  logout: callbackError => request(
    '/users/logout',
    { xhrFields: { withCredentials: true } },
    callbackError
  ),
}

export const handleRequestErrors = callback =>
  ({ response }) => {
    console.log('TEST', response)
    return of(callback(response))
  }
