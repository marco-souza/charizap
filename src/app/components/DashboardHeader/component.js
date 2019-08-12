import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import ProjectDetails from './ProjectDetails'
import ProjectActions from './ProjectActions'

const DashboardHeader = ({ className }) => (
  <Grid container spacing={5}>
    <Grid item md={5} xs={12}>
      <ProjectDetails />
    </Grid>
    <Grid item md={4} xs={12}>
      Chart
    </Grid>
    <Grid item md={3} xs={12}>
      <ProjectActions />
    </Grid>

  </Grid>
)

DashboardHeader.propTypes = {
  className: PropTypes.string.isRequired,
}

export default DashboardHeader
