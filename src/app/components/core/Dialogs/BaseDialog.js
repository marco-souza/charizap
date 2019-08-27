import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import Text from 'app/components/core/Text'
import { isMobile } from 'app/helpers/theme'

import { Header, Body, CloseIcon, LeftArrow } from './styled'

const BaseDialog = ({
  title,
  isOpen,
  children,
  className,
  handleClose,
  goToPrevious,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: className }}
      disableBackdropClick
      disableEscapeKeyDown
      scroll='body'
      fullScreen={isMobile()}
    >

      <Header>
        {/* TODO Add 'BACK' text here, couldn't handle the style =( */}
        <LeftArrow onClick={goToPrevious} className='leftSide' />

        <Text variant='span' color='secondary'>
          {title}
        </Text>

        <CloseIcon onClick={handleClose} />
      </Header>

      <Body>
        {children}
      </Body>
    </Dialog>
  )
}

BaseDialog.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  goToPrevious: PropTypes.func,
}

export default styled(BaseDialog)`
  border-radius: 10px !important;
`
