import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Computer from '@material-ui/icons/Computer'
import Cloud from '@material-ui/icons/Cloud'

import Button from 'app/components/core/Button'
// import Select from 'app/components/core/Select'

const ProjectActions = ({ className }) => (
  <Grid container className={className}>
    <Grid item xs={12}>
      <Button variant='icon' icon={<Cloud />}>
      Digital Ocean
      </Button>
      {/* <Select
        options={[
          { value: '1', label: 'Digital Ocean', icon: <Cloud /> },
          { value: '2', label: 'AWS', icon: <Cloud /> },
        ]}
      /> */}
    </Grid>

    <Grid item xs={12}>
      <Button variant='icon' icon={<Computer />}>
        phpMyAdmin
      </Button>
    </Grid>
  </Grid>
)

ProjectActions.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(ProjectActions)`
  & > div {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 15px auto;
    width: 100%;
  }
`
