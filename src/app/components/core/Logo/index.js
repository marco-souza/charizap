import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import coloredLogo from 'assets/images/logo_devopness_alfa.png'
import whiteLogo from 'assets/images/logo_devopness_beta.png'
import { mediaQueryUpTo } from 'app/helpers/theme'

const variants = {
  white: whiteLogo,
  colored: coloredLogo,
}

const Logo = ({ variant, ...otherProps }) => (
  <img
    src={variants[variant]}
    alt='devopness'
    {...otherProps}
  />
)

Logo.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
}

Logo.defaultProps = {
  variant: 'colored',
}

export default styled(Logo)`
  ${mediaQueryUpTo('xSmall', `max-width: 140px;`)}
`
