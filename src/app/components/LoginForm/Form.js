import React, { useEffect } from 'react'
import { withFormik } from 'formik'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'
import Link from 'app/components/core/Link'

import {
  propsToValues,
  defaultFormikProps,
  isSubmitDisabled,
  hasError,
  REQUIRED,
  EMAIL,
  PASSWORD,
} from 'app/helpers/forms'
import { sendNotificationsFormErrorResponse } from 'app/helpers/notifications'
import { useWrappers } from 'app/helpers/redux'
import useAuth from 'app/redux/auth'

import { Container } from './styled'

const Form = (props) => {
  const { handleSubmit, errorResponse, setRequestErrors } = props
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (errorResponse) {
      sendNotificationsFormErrorResponse(errorResponse, enqueueSnackbar)
      setRequestErrors(null)
    }
  }, [errorResponse])

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          hasError={hasError(props, 'email')}
          name='email'
          label='Email Address'
          placeholder='name@project.com'
          autoComplete='email'
        />

        <Input
          hasError={hasError(props, 'password')}
          label='Password'
          placeholder='+5 characters'
          type='password'
          name='password'
          autoComplete='current-password'
        />

        <Button
          type='submit'
          disabled={isSubmitDisabled(props)}
        >
          Login
        </Button>

        <Link href='#' small>
          Forgot your password?
        </Link>
      </form>
    </Container>
  )
}

Form.propTypes = {
  ...defaultFormikProps,
}

const validationSchema = Yup.object()
  .shape({
    email: Yup.string().email(EMAIL).required(REQUIRED),
    password: Yup.string().min(6, PASSWORD).required(REQUIRED),
  })

const mapPropsToValues = propsToValues
  .fromInitialState({
    email: '',
    password: '',
  })

const onSubmit = (values, { props }) => {
  console.log(values, props)
  props.login(values)
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
