import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'
import Link from 'app/components/core/Link'

import {
  propsToValues,
  defaultFormikProps,
  formIsValid,
  REQUIRED,
  EMAIL,
  PASSWORD,
} from 'app/helpers/forms'
import { useWrappers } from 'app/helpers/redux'
import useAuth from 'app/redux/auth'

import { FormContainer } from './styled'

const Form = (props) => {
  const { errors, handleSubmit } = props
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          name='email'
          label='Email Address'
          placeholder='name@project.com'
          autoComplete='username'
          errorMessage={errors.email}
        />

        <Input
          label='Password'
          placeholder='+5 characters'
          type='password'
          name='password'
          autoComplete='current-password'
          errorMessage={errors.password}
        />

        <Button
          type='submit'
          disabled={!formIsValid(props)}
        >
          Login
        </Button>

        <Link href='#' small>
          Forgot your password?
        </Link>
      </form>
    </FormContainer>
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
