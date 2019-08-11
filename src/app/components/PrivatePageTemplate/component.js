import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Menu from 'app/components/core/Menu'
import Card from 'app/components/core/Card'
import Logo from 'app/components/core/Logo'

import PopoverMenu from './PopoverMenu'

const PrivatePageTemplate = ({ children, className }) => (
  <Container className={className}>
    <Grid container>
      <Grid className='navbar' item xs={12}>
        <Menu
          leftSide={<Logo />}
          rightSide={<PopoverMenu avatar='https://avatars1.githubusercontent.com/u/4452113?s=460&v=4' />}
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
  className: PropTypes.string,
}

export default PrivatePageTemplate
