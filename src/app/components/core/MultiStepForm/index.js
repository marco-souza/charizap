import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { DotStep, StepManager } from './styled'

const MultiStepForm = ({ steps, onSubmit }) => {
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
    : onSubmit(data)

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
    <div>
      <Step
        step={step}
        data={data}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        addData={addData}
        nextStep={nextStep}
        previousStep={previousStep}
      />

      <StepManager>
        {steps.map((key, index) => <DotStep
          key={key}
          className={index === step ? 'selected' : 'step'}
          selected={index === step}
          onClick={() => setStepOnCLick(index, step)}
        />)}
      </StepManager>
    </div>
  )
}

MultiStepForm.propTypes = {
  steps: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default MultiStepForm
