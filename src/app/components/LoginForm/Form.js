import React from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'
import Link from 'app/components/core/Link'
import styled from 'styled-components'

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  className,
}) => (
  <div className={className}>
    <form onSubmit={handleSubmit}>
      <Input
        name='email'
        label='Email Address'
        placeholder='name@project.com'
      />

      <Input
        label='Password'
        placeholder='+5 characters'
        type='password'
        name='password'
      />

      <Button type='submit' disable={isSubmitting}>
        Login
      </Button>

      <Link href='#' small>
        Forgot your password?
      </Link>
    </form>
  </div>
)

Form.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default styled(Form)`
  & button {
    width: 100%;
    margin: 20px 0;
  }

  & form {
    margin-top: 70px;
  }
`
