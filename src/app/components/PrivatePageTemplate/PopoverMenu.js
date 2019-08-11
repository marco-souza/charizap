import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Popover from '@material-ui/core/Popover'
import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

import MenuView from './MenuView'

const PopoverMenu = ({
  avatar,
  className,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div className={className}>
      <img
        src={avatar}
        alt='Menu'
        aria-describedby={id}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={className.popover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuView />
      </Popover>
    </div>
  )
}

PopoverMenu.propTypes = {
  className: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default styled(PopoverMenu)`
  img {
    width: 40px;
    border-radius: 50%;
    border: 5px solid ${getPropsBackground('stroke')};
  }
`
