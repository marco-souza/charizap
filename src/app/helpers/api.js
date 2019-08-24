import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { getCookie, COOKIE_KEY } from 'app/helpers/cookie'

const BASE_URL = process.env.API_BASE_URL
const headers = {
  'Accept': 'application/json',
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
    headers,
    ...options,
  })

export default {
  signUp: body => request(`${BASE_URL}/users/signup`, { body }),
  login: body => request(`${BASE_URL}/users/signup`, { body }),
  logout: options => request(`${BASE_URL}/users/signup`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${getCookie(COOKIE_KEY)}`,
    },
    xhrFields: {
      withCredentials: true
    }
  }),
}
