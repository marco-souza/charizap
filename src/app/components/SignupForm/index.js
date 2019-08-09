import React from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'
import Link from 'app/components/core/Link'
import Header from 'app/components/core/Header'
import styled from 'styled-components'

const CustomHeader = styled(Header)`
  margin: 0;
  max-width: 400px;
`

const Signup = ({ className }) => (
  <div className={className}>
    <CustomHeader>
      Get started absolutely free. No credid card needed.
    </CustomHeader>
    <form onSubmit={e => {
      // eslint-disable-next-line no-debugger
      debugger
    }}>
      <Input
        name='username'
        label='Username'
        placeholder='Your first and last name'
      />

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

      <Button type='submit'>
        Sign Up
      </Button>

      <p>
        By signing up youre agreeing to the Devopness
        <Link href='#' small>
          Terms of service
        </Link>
        &
        <Link href='#' small>
           Privacy Policy.
        </Link>
      </p>
    </form>
  </div>
)

Signup.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default Signup
