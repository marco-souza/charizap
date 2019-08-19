import { connect } from 'react-redux'

import {
  login,
  logout,
  signUp,
  setErrors,
  validateAuthKey
} from './constants'
// Make easy to import all important ducks information
import reducer, { initialState } from './reducer'
import epics from './epics'

import { duckStateToProps } from 'app/helpers/redux'

const mapDispatchToProps = (dispatch, props) => ({
  login: data => dispatch(login(data)),
  logout: data => dispatch(logout(data)),
  signUp: data => dispatch(signUp(data)),
  setErrors: data => dispatch(setErrors(data)),

  validateAuthKey: data => dispatch(validateAuthKey(data)),
})

export default connect(duckStateToProps('auth'), mapDispatchToProps)
export {
  reducer,
  epics,
  initialState,
}
