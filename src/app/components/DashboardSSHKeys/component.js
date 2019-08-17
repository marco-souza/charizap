import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Section from 'app/components/core/Section'
import NoState from 'app/components/core/Section/NoState'
import coloredLogo from 'assets/images/logo_devopness_alfa.png'

import FormContainer from './FormContainer'
import { GridItem } from './styled'

const DashboardSSHKeys = ({ className }) => (
  <Grid container spacing={5} className={className}>
    <GridItem item md={6} xs={12}>
      <FormContainer />
    </GridItem>

    <GridItem item md={6} xs={12}>
      <Section title='Active Keys' className={className}>
        <NoState
          src={coloredLogo}
          text='You need an ssh key'
          buttonText='Generate'
          handleClick={console.log}
          background='none'
        />
      </Section>
    </GridItem>
  </Grid>
)

DashboardSSHKeys.propTypes = {
  className: PropTypes.string.isRequired,
}

export default DashboardSSHKeys
