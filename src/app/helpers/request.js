import { from, throwError } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { map, switchMap } from 'rxjs/operators'

import { getCookie, setCookie, eraseCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'

const cookies = [COOKIE_KEY, COOKIE_REFRESH_KEY]
const BASE_URL = process.env.API_BASE_URL

export const hasCookies = () => cookies
  .map(getCookie)
  .every(item => item)

export const deleteCookies = () => cookies
  .map(eraseCookie)

const defaultHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (hasCookies()) {
    headers.Authorization = `Bearer ${getCookie(COOKIE_KEY)}`
  }

  return headers
}

export const cookieHandler = response => {
  setCookie(COOKIE_KEY, response.access_token)
  setCookie(COOKIE_REFRESH_KEY, response.refresh_token)
}

export const request = (url, options) => {
  const reqURL = `${BASE_URL}${url}`
  const reqOptions = {
    ...options,
    body: options.body
      ? JSON.stringify(options.body)
      : null,
    headers: {
      ...defaultHeaders(),
      ...options.headers,
    }
  }

  return fromFetch(reqURL, reqOptions).pipe(
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
}

export const refreshHandler = () => {
  const refreshRequest = request('/users/refresh-token', {
    method: 'POST',
    body: { refresh_token: getCookie(COOKIE_REFRESH_KEY) },
  })

  return refreshRequest.pipe(
    map(cookieHandler),
  )
}
