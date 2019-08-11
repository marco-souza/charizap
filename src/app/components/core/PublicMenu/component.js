import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withBreakpoints } from 'react-breakpoints'

import Button from 'app/components/core/Button'
import Text from 'app/components/core/Text'
import Logo from 'app/components/core/Logo'
import Menu from 'app/components/core/Menu'

const isDesktop = (currentBreakpoint, breakpoints) => (
  breakpoints[currentBreakpoint] > breakpoints.mobile
)

const PublicMenu = ({
  text,
  href,
  buttonType,
  buttonText,
  className,
  breakpoints,
  currentBreakpoint,
}) => (
  <div className={className}>
    <Menu
      leftSide={!isDesktop(currentBreakpoint, breakpoints) && <Logo />}
      rightSide={
        <div>
          {isDesktop(currentBreakpoint, breakpoints) &&
            <Text variant='span' small>
              {text}
            </Text>
          }
          <Link to={href}>
            <Button variant={buttonType} >{buttonText}</Button>
          </Link>
        </div>
      }
    />
  </div>
)

PublicMenu.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
}

PublicMenu.defaultProps = {
  buttonType: 'outlined',
}

export default withBreakpoints(PublicMenu)
