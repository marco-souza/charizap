import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Menu from 'app/components/core/Menu'
import Card from 'app/components/core/Card'
import Button from 'app/components/core/Button'

import Logo from 'app/components/core/Logo'

const PrivatePageTemplate = ({ logout, children, className }) => (
  <Container className={className}>
    <Grid container>
      <Grid className='navbar' item xs={12}>
        <Menu
          leftSide={<Logo />}
          rightSide={(
            <Button variant='outlined' onClick={logout}>
              logout
            </Button>
          )}
        />
      </Grid>

      <Grid item xs>
        &nbsp;
      </Grid>

      <Grid item md={10} sm={12}>
        <Card >
          {children}
        </Card>
      </Grid>

      <Grid item xs>
        &nbsp;
      </Grid>
    </Grid>
  </Container>
)

PrivatePageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  logout: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default PrivatePageTemplate
