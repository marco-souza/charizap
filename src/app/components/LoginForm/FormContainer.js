import { withFormik } from 'formik'
import useAuth from 'app/redux/auth'
import * as Yup from 'yup'

import Form from './Form'

const REQUIRED = 'Field is required!'
const validationSchema = Yup.object()
  .shape({
    email: Yup.string().required(REQUIRED),
    password: Yup.string().required(REQUIRED),
  })

const mapPropsToValues = ({
  email = '',
  password = '',
}) => ({
  email,
  password,
})

const onSubmit = (values, { props }) => {
  console.log(values, props)
  props.login(values)
}

const Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
  validationSchema,
  mapPropsToValues,
})(Form)

export default useAuth(Container)
