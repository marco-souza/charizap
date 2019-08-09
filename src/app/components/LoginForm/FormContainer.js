import { withFormik } from 'formik'
import useAuth from 'app/redux/auth'

import Form from './Form'

const onSubmit = (values, { props }) => {
  console.log(values, props)
  props.login(values)
}

const Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
})(Form)

export default useAuth(Container)
