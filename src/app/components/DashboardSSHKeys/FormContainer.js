import { withFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from 'app/redux/auth'
import { useWrappers } from 'app/helpers/redux'

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

export default useWrappers(
  withFormik({
    enableReinitialize: true,
    handleSubmit: onSubmit,
    validationSchema,
    mapPropsToValues,
  }),
  useAuth,
)(Form)
