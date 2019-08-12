import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Computer from '@material-ui/icons/Computer'

import Button from 'app/components/core/Button'

import theme, { getPropsBackground, getPropsColor } from 'app/helpers/theme'

const ProjectDetails = ({ className }) => (
  <Grid container className={className}>
    <Grid item xs={12}>
      <Button variant='outlined'>
        Digital Ocean
      </Button>
    </Grid>

    <Grid item xs={12}>
      <Button variant='icon' icon={<Computer />}>
        phpMyAdmin
      </Button>
    </Grid>
  </Grid>
)

ProjectDetails.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(ProjectDetails)`
  & > div {
    display: flex;
    flex-direction: column;
  }

  .logo {
    width: 128px;
    height: 128px;
    border-radius: 40px;
    background-color: ${getPropsBackground('white')};
    border: 1px solid ${getPropsBackground('stroke')};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      margin: 10px 0;
      vertical-align: middle;
    }
  }

  .title {
    display: flex;
    flex-grow: 1;


    .state {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      text-transform: uppercase;
      font-family: ${theme.fonts};
      font-size: .8em;
    }
  }

  .on {
    background-color: ${getPropsColor('success')};
    color: ${getPropsBackground('white')};
  }

  button {
    margin: 10px auto;
    width: 100%;
  }
`
