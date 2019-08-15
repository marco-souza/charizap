import { getVarEnv } from 'app/webpack/utils'

const BaseUrl = getVarEnv('API_BASE_URL')

const signup = () =>
  fetch(BaseUrl).then(function (response) {
    if (response.ok) {
      const message = response.body()
      console.log(message)
      return message
    }
    console.log('fail message')
    return false
  })

export default signup
