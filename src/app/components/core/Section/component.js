import React from 'react'
import PropTypes from 'prop-types'

import Card from 'app/components/core/Card'
import Text from 'app/components/core/Text'

const Container = ({ children, title, className, ...otherProps }) => (
  <div className={className}>
    <Text variant='subtitle1' color='secondary'>
      {title}
    </Text>

    <Card className='card' {...otherProps}>
      {children}
    </Card>
  </div>
)

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
