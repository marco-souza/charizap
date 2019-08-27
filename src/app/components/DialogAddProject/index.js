import React, { useState } from 'react'
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

const DialogContainer = ({ handleClose, modalIsVisible }) => {
  const [data, setData] = useState({})
  const [step, setStep] = useState(0)
  const [lastVisited, setLastVisited] = useState(0)
  const hasNext = steps.length - 1 > step
  const hasPrevious = step > 0
  const Step = steps[step]

  const nextStep = () => hasNext
    ? (
      setStep(step + 1),
      setLastVisited(step + 1)
    )
    : console.log('Loks', data)

  const previousStep = () => setStep(hasPrevious
    ? step - 1
    : step
  )

  const setStepOnCLick = (index, step) => setStep(index <= lastVisited
    ? index
    : step
  )

  const addData = newData => setData({
    ...data,
    ...newData,
  })
  return (
    <Dialog
      title='Make it happen'
      isOpen={modalIsVisible}
      handleClose={handleClose}
      previousStep={previousStep}
    >
      <MultiStepForm
        steps={steps}
        Step={Step}
        step={step}
        data={data}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        addData={addData}
        nextStep={nextStep}
        previousStep={previousStep}
        setStepOnCLick={setStepOnCLick}
      />
    </Dialog>
  )
}

DialogContainer.propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default DialogContainer
