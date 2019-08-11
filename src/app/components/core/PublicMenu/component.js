import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withBreakpoints } from 'react-breakpoints'

import Button from 'app/components/core/Button'
import Text from 'app/components/core/Text'
import Logo from 'app/components/core/Logo'
import Menu from 'app/components/core/Menu'

const getScreenType = (currentBreakpoint, breakpoints) => {
  if (breakpoints[currentBreakpoint] > breakpoints.mobile) {
    return 'Desktop'
  }
  return null
}

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
      leftSide={getScreenType(currentBreakpoint, breakpoints)
        ? null
        : <Logo />
      }
      rightSide={getScreenType(currentBreakpoint, breakpoints)
        ? (
          <div>
            <Text variant='span' small>
              {text}
            </Text>
            <Link to={href}>
              <Button variant={buttonType} >{buttonText}</Button>
            </Link>
          </div>
        ) : (
          <Link to={href}>
            <Button variant={buttonType} >{buttonText}</Button>
          </Link>
        )
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
