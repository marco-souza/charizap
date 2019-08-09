import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from 'app/components/core/Button'
import Text from 'app/components/core/Text'

const PublicMenu = ({
  text,
  href,
  buttonType,
  buttonText,
  className,
}) => (
  <div className={className}>
    <Text variant='span' small>
      {text}
    </Text>

    <Link to={href}>
      <Button variant={buttonType} >{buttonText}</Button>
    </Link>
  </div>
)

PublicMenu.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

PublicMenu.defaultProps = {
  buttonType: 'outlined',
}

export default PublicMenu
