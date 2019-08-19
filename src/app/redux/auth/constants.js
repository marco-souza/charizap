import { createAction } from 'app/helpers/redux'

const duckNamePrefix = 'AUTH'

// Redux Types
export const LOGIN = `${duckNamePrefix}/LOGIN`
export const LOGOUT = `${duckNamePrefix}/LOGOUT`
export const IS_LOGGED = `${duckNamePrefix}/IS_LOGGED`
export const VALIDATE_AUTH_KEY = `${duckNamePrefix}/VALIDATE_AUTH_KEY`
export const SIGN_UP = `${duckNamePrefix}/SIGN_UP`
export const SET_ERRORS = `${duckNamePrefix}/SET_ERRORS`
export const SET_SIGNUP_DONE = `${duckNamePrefix}/SET_SIGNUP_DONE`

// Redux Actions (format: { type, payload })
export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)
export const isLogged = createAction(IS_LOGGED)
export const validateAuthKey = createAction(VALIDATE_AUTH_KEY)
export const signUp = createAction(SIGN_UP)
export const setRequestErrors = createAction(SET_ERRORS)
export const setSignupDone = createAction(SET_SIGNUP_DONE)
