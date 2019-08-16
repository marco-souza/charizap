import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import bodyImage from 'assets/images/tetris-5p.gif'
import DoneGif from 'assets/images/tetris-6p.gif'

import { Step, SubText, Header, Button } from '../styled'

const WaitStep = (props) => {
  const [serverDone, setServerDone] = useState(false)
  useEffect(() => {
    setTimeout(() => { setServerDone(true) }, 3000)
  })

  return (
    <Step {...props}>
      <Header variant='h4'>
        It's coming?
      </Header>

      <img src={serverDone ? DoneGif : bodyImage} alt='Waiting...' />

      <SubText>Please wait, your project will take off in a few moments</SubText>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant='text'>
            Cancel
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={props.nextStep()} disabled={!serverDone}>
            Success
          </Button>
        </Grid>
      </Grid>
    </Step>
  )
}

WaitStep.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  nextStep: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default WaitStep
