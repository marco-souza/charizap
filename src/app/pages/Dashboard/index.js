import React from 'react'
import Grid from '@material-ui/core/Grid'

import CallToActionContainer from 'app/components/CallToActionContainer'
import DashboardDeployments from 'app/components/DashboardDeployments'
import Separator from 'app/components/core/Separator'

const Dashboard = (props) => {
  return (
    <div>
      Dashboard
      <CallToActionContainer />

      <Separator />

      <DashboardDeployments />

      <Separator />

      <Grid container spacing={5}>
        <Grid item md={6} sm={12}>
          <DashboardDeployments />
        </Grid>

        <Grid item md={6} sm={12}>
          <DashboardDeployments />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
