import React from 'react'
import PropTypes from 'prop-types'

import MultiStepForm from 'app/components/core/MultiStepForm'
import Dialog from 'app/components/core/Dialogs/BaseDialog'

import SelectProviderStep from './SelectProvider'
import ServerSpecsStep from './ServerSpecs'
import SelectDBStep from './SelectDB'
import SelectDBManagerStep from './SelectDBManager'
import ConfirmationStep from './Confirmation'
import WaitStep from './Wait'

const steps = [
  SelectProviderStep,
  ServerSpecsStep,
  SelectDBStep,
  SelectDBManagerStep,
  ConfirmationStep,
  WaitStep,
]

const DialogContainer = ({ handleClose, modalIsVisible }) => (
  <Dialog
    title='Make it happen'
    isOpen={modalIsVisible}
    handleClose={handleClose}
  >
    <MultiStepForm
      onSubmit={data => console.log('Loks', data)}
      steps={steps}
    />
  </Dialog>
)

DialogContainer.propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default DialogContainer
