import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Menu from 'app/components/core/Menu'
import Card from 'app/components/core/Card'

import Logo from 'app/components/core/Logo'

const PrivatePageTemplate = ({ logout, children, className }) => (
  <div className={className}>
    <Container>
      <Grid container>
        <Menu
          leftSide={<Logo />}
          rightSide={<button onClick={logout}>logout</button>}
        />

        <Card className='container'>
          {children}
        </Card>
      </Grid>
    </Container>
  </div>
)

PrivatePageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  logout: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default PrivatePageTemplate
