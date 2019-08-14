import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MultiStepForm = ({ steps }) => {
  const [data, setData] = useState({})
  const [step, setStep] = useState(0)
  const hasNext = steps.length - 1 > step
  const hasPrevious = step > 0
  const Step = steps[step]

  const nextStep = () => setStep(hasNext
    ? step + 1
    : step
  )

  const previousStep = () => setStep(hasPrevious
    ? step - 1
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
    </div>
  )
}

MultiStepForm.propTypes = {
  steps: PropTypes.array.isRequired,
}

export default MultiStepForm
