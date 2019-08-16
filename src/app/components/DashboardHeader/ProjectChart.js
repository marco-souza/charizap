import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { Line } from 'react-chartjs-2'

import Text from 'app/components/core/Text'
import theme from 'app/helpers/theme'

import pingGif from 'assets/images/ping.gif'

const mockedData = [
  { date: moment().subtract(7, 'day'), value: Math.round(Math.random() * 50) },
  { date: moment().subtract(6, 'day'), value: Math.round(Math.random() * 50) },
  { date: moment().subtract(5, 'day'), value: Math.round(Math.random() * 50) },
  { date: moment().subtract(4, 'day'), value: Math.round(Math.random() * 50) },
  { date: moment().subtract(3, 'day'), value: Math.round(Math.random() * 50) },
  { date: moment().subtract(2, 'day'), value: Math.round(Math.random() * 50) },
  { date: moment().subtract(1, 'day'), value: Math.round(Math.random() * 50) },
]

const ProjectChart = ({ className, fake }) => (
  <Grid container className={className}>
    <Grid item xs={12}>
      <Text color='secondary' variant='h6'>
        Instability
      </Text>

      {!fake
        ? <Line
          data={{
            labels: mockedData.map(({ date }) => date.fromNow()),
            datasets: [{
              backgroundColor: `${theme.colors.primary}60`,
              data: mockedData.map(({ value }) => value),
              borderWidth: 1
            }],
          }}
          options={{
            legend: {
              display: false
            },
          }}
        />
        : <img src={pingGif} alt='ping' width='100%' />
      }
    </Grid>
  </Grid>
)

ProjectChart.propTypes = {
  className: PropTypes.string.isRequired,
  fake: PropTypes.bool,
}

export default styled(ProjectChart)`
  h6 {
    margin-bottom: 20px;
  }
`
