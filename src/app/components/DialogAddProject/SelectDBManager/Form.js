import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash/pick'
import { withFormik } from 'formik'
import Grid from '@material-ui/core/Grid'

import Button from 'app/components/core/Button'

import { validationSchema, formFields } from './constants'

const DATA_KEY = 'databaseManager'

const mapPropsToValues = ({ data }) =>
  pick({
    ...formFields,
    ...data[DATA_KEY],
  }, Object.keys(formFields))

const onSubmit = (values, { props }) => {
  props.addData({
    [DATA_KEY]: values
  })
  props.nextStep()
}

const Form = ({
  data,
  values,
  setFieldValue,
  handleSubmit,
  isSubmitting,
  className,
  ...otherProps
}) => {
  const onClickHandler = yes =>
    () => {
      setFieldValue('phpMyAdmin', yes)
      handleSubmit()
    }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Button onClick={onClickHandler(false)} background='secondary'>No</Button>
          </Grid>

          <Grid item xs={6}>
            <Button onClick={onClickHandler(true)}>yes</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

Form.propTypes = {
  data: PropTypes.object,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

let Container
Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
  validationSchema,
  mapPropsToValues,
})(Form)

export default Container
