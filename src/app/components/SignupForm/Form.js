import React, { useEffect } from 'react'
import { withFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { Redirect } from 'react-router-dom'
import * as Yup from 'yup'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'
import Link from 'app/components/core/Link'
import Text from 'app/components/core/Text'

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
  const { handleSubmit, errorResponse, signupDone, setRequestErrors, setSignupDone } = props
  const termOfServices = <Link href='#'>Terms of service</Link>
  const privacyPolicy = <Link href='#'>Privacy Policy</Link>
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (errorResponse) {
      sendNotificationsFormErrorResponse(errorResponse, enqueueSnackbar)
      setRequestErrors(null)
    }
  }, [errorResponse])

  if (signupDone) {
    setSignupDone(false)
    enqueueSnackbar('Successfully sign up! You can login now :)', { variant: 'success' })
    return <Redirect to='/login' />
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          hasError={hasError(props, 'name')}
          name='name'
          label='Username'
          autoComplete='username'
          placeholder='Your first and last name'
        />

        <Input
          hasError={hasError(props, 'email')}
          name='email'
          label='Email Address'
          autoComplete='email'
          placeholder='name@project.com'
        />

        <Input
          hasError={hasError(props, 'password')}
          label='Password'
          placeholder='+5 characters'
          type='password'
          name='password'
          autoComplete='new-password'
        />

        <Button
          type='submit'
          disabled={isSubmitDisabled(props)}
        >
          Sign Up
        </Button>

        <Text variant='span'>
          By signing up you're agreeing to the Devopness {termOfServices} & {privacyPolicy}.
        </Text>
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
    name: Yup.string().min(3).required(REQUIRED),
    password: Yup.string().min(6, PASSWORD).required(REQUIRED),
  })

const mapPropsToValues = propsToValues
  .fromInitialState({
    email: '',
    name: '',
    password: '',
  })

const onSubmit = (values, { props }) => {
  console.log(values, props)
  props.signUp(values)
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
