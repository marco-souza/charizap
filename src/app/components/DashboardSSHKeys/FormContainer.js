import { withFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from 'app/redux/auth'

import Form from './Form'

const REQUIRED = 'Field is required!'
const validationSchema = Yup.object()
  .shape({
    name: Yup.string().required(REQUIRED),
    SSHKey: Yup.string().required(REQUIRED),
  })

const mapPropsToValues = ({
  name = '',
  SSHKey = '',
}) => ({
  name,
  SSHKey,
})

const onSubmit = (values, { props }) => {
  console.log(values, props)
}

const Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
  validationSchema,
  mapPropsToValues,
})(Form)

export default useAuth(Container)
