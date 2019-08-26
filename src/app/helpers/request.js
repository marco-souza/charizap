import { from, throwError } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { map, switchMap } from 'rxjs/operators'

import { getCookie, setCookie, eraseCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'
const cookies = [COOKIE_KEY, COOKIE_REFRESH_KEY]

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

export const request = (url, options) => {
  return fromFetch(`${BASE_URL}${url}`, {
    ...options,
    body: options.body
      ? JSON.stringify(options.body)
      : null,
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

export const hasCookies = () => cookies
  .map(getCookie)
  .every(item => item)

export const deleteCookies = () => cookies
  .map(eraseCookie)
