import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { getCookie, COOKIE_KEY } from 'app/helpers/cookie'

const BASE_URL = process.env.API_BASE_URL
const defaultHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getCookie(COOKIE_KEY)}`,
})

export const request = (url, options) =>
  ajax({
    url: `${BASE_URL}${url}`,
    ...options,
    crossDomain: true,
    headers: {
      ...defaultHeaders(),
      ...options.header,
    },
  })

export default {
  signUp: body => request('/users/signup', {
    method: 'POST',
    body: body,
  }),
  login: body => request('/users/login', {
    method: 'POST',
    body: body,
  }),
  refresh: token => request('/users/refresh', {
    method: 'POST',
    body: { refresh_token: token },
  }),
  logout: options => request('/users/logout', {
    xhrFields: {
      withCredentials: true
    }
  }),
}

export const handleRequestErrors = callback =>
  ({ response }) => {
    console.log('TEST', response)
    return of(callback(response))
  }
