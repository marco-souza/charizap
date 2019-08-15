const BaseUrl = process.env.API_BASE_URL

export default {
  signUp: () => `${BaseUrl}users/signup`,
}
