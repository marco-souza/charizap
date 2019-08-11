import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'app/components/core/Button'
import Textarea from 'app/components/core/Textarea'
import Input from 'app/components/core/Input'
import { getPropsColor } from 'app/helpers/theme'

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  className,
}) => {
  // eslint-disable-next-line no-debugger
  // debugger
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Name'
          placeholder='Ex: MacBook'
        />

        <Textarea
          label='Public Key SSH'
          placeholder='Add your public key'
          name='SSHKey'
          rows='10'
        />

        <Button type='submit' disable={isSubmitting}>
          Add key
        </Button>
      </form>
    </div>
  )
}

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
  position: relative;
  width: 100%;

  & button {
    margin-top: 20px;
    float: right
  }

  label {
    margin: 10px 0;
    font-weight: bold;
    font-size: 1em;
    color: ${getPropsColor('secondary')}
  }
`
