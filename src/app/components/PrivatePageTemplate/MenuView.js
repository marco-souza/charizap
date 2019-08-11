import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'app/components/core/Button'
import useAuth from 'app/redux/auth'

const MenuView = ({
  logout,
  className,
}) => {
  return (
    <div className={className}>
      {/* TODO: Add menu */}
      <Button onClick={logout} variant='outlined'>
        Logout
      </Button>
    </div>
  )
}

MenuView.propTypes = {
  className: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
}

export default styled(useAuth(MenuView))`
  padding: 20px;
`
