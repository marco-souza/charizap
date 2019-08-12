import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import ProjectDetails from './ProjectDetails'

const DashboardHeader = ({ className }) => (
  <Grid container spacing={5}>
    <Grid item md={6} xs={12}>
      <ProjectDetails />
    </Grid>
    <Grid item md={4} xs={12}>
      Chart
    </Grid>
    <Grid item md={2} xs={12}>
      Actions
    </Grid>

  </Grid>
)

DashboardHeader.propTypes = {
  className: PropTypes.string.isRequired,
}

export default DashboardHeader
