import React from 'react'
import PropTypes from 'prop-types'

import MultiStepForm from 'app/components/core/MultiStepForm'
import Dialog from 'app/components/core/Dialogs/BaseDialog'

import SelectProviderStep from './SelectProvider'
import ServerSpecsStep from './ServerSpecs'
import SelectDB from './SelectDB'

const steps = [
  SelectProviderStep,
  ServerSpecsStep,
  SelectDB,
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
