import { withFormik } from 'formik'
import useAuth from 'app/redux/auth'

import Form from './Form'

const onSubmit = (values, { props }) => {
  console.log('Form values', values)
  props.signUp(values)
}

const Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
})(Form)

export default useAuth(Container)
