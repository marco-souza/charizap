import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import Grid from '@material-ui/core/Grid'

import Text from 'app/components/core/Text'
import Button from 'app/components/core/Button'

const onSubmit = (_, { props }) => {
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
}) => (
  <div className={className}>
    {/* TODO: refactor colors so can bg use any color */}
    <Button background='none'> 10$ month </Button>

    <Text>have you opted for the $ 10 a month plan with the 1GB capacity. Can we continue?</Text>

    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Button onClick={() => {}} background='secondary'>
            Cancel
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={handleSubmit}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </form>
  </div>
)

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
})(Form)

export default Container
