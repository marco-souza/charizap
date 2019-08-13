import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Computer from '@material-ui/icons/Computer'
import Cloud from '@material-ui/icons/Cloud'

import Button from 'app/components/core/Button'
import Dialog from 'app/components/core/Dialogs/BaseDialog'
// import Select from 'app/components/core/Select'

const ProjectActions = ({ className }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <Grid container className={className} spacing={3}>
      <Dialog
        title='Download your logo'
        isOpen={modalIsVisible}
        handleClose={() => setModalIsVisible(false)}
      >
        Losco
      </Dialog>
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
