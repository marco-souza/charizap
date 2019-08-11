import React from 'react'
import PropTypes from 'prop-types'

import Section from 'app/components/core/Section'
import NoState from 'app/components/core/Section/NoState'
import coloredLogo from 'assets/images/logo_devopness_alfa.png'

const DashboardDeployments = ({ className }) => (
  <Section title='Deployments' className={className}>
    <NoState
      src={coloredLogo}
      text='Start working on your project!'
      buttonText='Start Now'
      handleClick={console.log}
    />
  </Section>
)

DashboardDeployments.propTypes = {
  className: PropTypes.string.isRequired,
}

export default DashboardDeployments
