import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Section from 'app/components/core/Section'
import NoState from 'app/components/core/Section/NoState'
import coloredLogo from 'assets/images/logo_devopness_alfa.png'

import FormContainer from './FormContainer'

const DashboardSSHKeys = ({ className }) => (
  <Grid container spacing={5} className={className}>
    <Grid item md={6} xs={12}>
      <Section title='Add SSH Keys' className='section'>
        <FormContainer />
      </Section>
    </Grid>

    <Grid item md={6} xs={12}>
      <Section title='SSH Keys' className='section'>
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
