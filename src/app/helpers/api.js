const BaseUrl = process.env.API_BASE_URL
const CorsService = 'http://glacial-mountain-72752.herokuapp.com/'

export default {
  signUp: () => `${CorsService}${BaseUrl}users/signup`,
  login: () => `${CorsService}${BaseUrl}users/login`,
  logout: () => `${CorsService}${BaseUrl}users/logout`,
}
