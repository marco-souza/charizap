import React from 'react'
import PropTypes from 'prop-types'

import Block from 'app/components/core/Block'
import Button from 'app/components/core/Button'
import Container from 'app/components/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const Header = styled.h2`
  padding-top: 200px;
  padding-bottom: 80px;
`

const CallToActionContainer = ({ logout }) => (
  <Block>
    <Container>
      <Grid item xs={12}>
        <Typography variant='h2' component={Header}>
          Your new amazing web page starts right here!
        </Typography>

        <Button variant='outlined' onClick={() => logout()}>
          Click to logout
        </Button>
      </Grid>
    </Container>
  </Block>
)

CallToActionContainer.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default CallToActionContainer
