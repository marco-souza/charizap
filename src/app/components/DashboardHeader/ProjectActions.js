import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Computer from '@material-ui/icons/Computer'
import Cloud from '@material-ui/icons/Cloud'

import DialogAddProject from 'app/components/DialogAddProject'
import Button from 'app/components/core/Button'

const ProjectActions = ({ className }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <Grid container className={className} spacing={3}>
      <DialogAddProject
        modalIsVisible={modalIsVisible}
        handleClose={() => setModalIsVisible(false)}
      />
      <Grid item xs={12} sm={6} md={12}>
        <Button
          variant='icon'
          icon={<Cloud />}
          onClick={() => setModalIsVisible(true)}
        >
          Digital Ocean
        </Button>
        {/* <Select
          options={[
            { value: '1', label: 'Digital Ocean', icon: <Cloud /> },
            { value: '2', label: 'AWS', icon: <Cloud /> },
          ]}
        /> */}
      </Grid>

      <Grid item xs={12} sm={6} md={12}>
        <Button variant='icon' icon={<Computer />}>
          phpMyAdmin
        </Button>
      </Grid>
    </Grid>
  )
}

ProjectActions.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(ProjectActions)`
  & > div {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
  }
`
