import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Highlight from 'app/components/core/Highlight'
import bodyImage from 'assets/images/tetris-5p.gif'

import { Step, Header, Button, SubText, Tag } from '../styled'

const ConfirmationStep = (props) => (
  <Step {...props}>
    <Header variant='h4'>Are you ready?</Header>

    <img src={bodyImage} alt='Select DB Manager' />

    <div>
      <Tag>10$ month</Tag>
    </div>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button variant='text'>
          No
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button onClick={props.nextStep}>
          Yes
        </Button>
      </Grid>
    </Grid>

    <SubText small>
          You have opted for the <Highlight>$ 10 a month</Highlight> plan with the <Highlight>1 GB</Highlight> capacity. Can we continue?
    </SubText>
  </Step>
)

ConfirmationStep.propTypes = {
  nextStep: PropTypes.func,
}

export default ConfirmationStep
