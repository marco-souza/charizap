import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'

import Menu from 'app/components/core/Menu'
import Card from 'app/components/core/Card'
import Button from 'app/components/core/Button'

import Logo from 'app/components/core/Logo'

const PrivatePageTemplate = ({ logout, children, className }) => (
  <div className={className}>
    <Container>
      <Menu
        leftSide={<Logo />}
        rightSide={(
          <Button variant='outlined' onClick={logout}>
            logout
          </Button>
        )}
      />

      <Card className='container'>
        {children}
      </Card>
    </Container>
  </div>
)

PrivatePageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  logout: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default PrivatePageTemplate
