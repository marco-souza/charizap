import React from 'react'

import DashboardDeployments from 'app/components/DashboardDeployments'
import DashboardSSHKeys from 'app/components/DashboardSSHKeys'
import Separator from 'app/components/core/Separator'

const Dashboard = (props) => {
  return (
    <div>
      <Separator />

      <DashboardDeployments />

      <Separator />

      <DashboardSSHKeys />
    </div>
  )
}

export default Dashboard
