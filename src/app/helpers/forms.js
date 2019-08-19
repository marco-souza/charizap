import pick from 'lodash/pick'
import PropTypes from 'prop-types'

export const REQUIRED = 'Field is required!'
export const EMAIL = 'Field must be a valid email!'
export const PASSWORD = 'Password should have at least 6 characters!'

export const propsToValues = {
  fromInitialState: (initialState) =>
    (props) => pick(
      Object.assign({}, initialState, props),
      Object.keys(initialState)
    )
}

export const isSubmitDisabled = form => (
  form.errors && form.touched &&
  Object.keys(form.errors).length &&
  Object.keys(form.touched).length &&
  !form.isValid
)

export const defaultFormikProps = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export const hasError = ({ touched, errors }, name) => (
  Boolean(touched[name] && errors[name])
)
