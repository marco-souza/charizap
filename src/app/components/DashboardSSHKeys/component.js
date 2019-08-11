import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Section from 'app/components/core/Section'
import coloredLogo from 'assets/images/logo_devopness_alfa.png'

import FormContainer from './FormContainer'
import NoState from './NoState'

const DashboardSSHKeys = ({ className }) => (
  <Grid container spacing={5}>
    <Grid item md={6} sm={12}>
      <FormContainer />
    </Grid>

    <Grid item md={6} sm={12}>
      <Section title='SSH Keys' className={className}>
        <NoState
          src={coloredLogo}
          text='You need an ssh key'
          buttonText='Generate'
          handleClick={console.log}
        />
      </Section>
    </Grid>
  </Grid>
)

DashboardSSHKeys.propTypes = {
  className: PropTypes.string.isRequired,
}

export default DashboardSSHKeys
