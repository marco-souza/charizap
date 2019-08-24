import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { getCookie, COOKIE_KEY, COOKIE_REFRESH_KEY } from 'app/helpers/cookie'

const BASE_URL = process.env.API_BASE_URL
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const handleRequestErrors = callback =>
  ({ response }) => {
    console.log(response)
    // TODO: handle Unauthenticated requests
    return of(callback(response))
  }

export const request = (url, options) =>
  ajax({
    url,
    ...options,
  })

export default {
  signUp: body => request(`${BASE_URL}/users/signup`, {
    method: 'POST',
    body: body,
    headers: defaultHeaders,
  }),
  login: body => request(`${BASE_URL}/users/login`, {
    method: 'POST',
    body: body,
    headers: defaultHeaders,
  }),
  refresh_key: () => request(`${BASE_URL}/users/refresh`, {
    method: 'POST',
    body: { refresh_token: `${getCookie(COOKIE_REFRESH_KEY)}` },
    headers: defaultHeaders,
  }),
  logout: options => request(`${BASE_URL}/users/logout`, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${getCookie(COOKIE_KEY)}`,
    },
    xhrFields: {
      withCredentials: true
    }
  }),
}
