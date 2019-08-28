import React from 'react'
import PropTypes from 'prop-types'

import { DotStep, StepManager } from './styled'

const MultiStepForm = ({
  Step,
  step,
  steps,
  data,
  hasNext,
  hasPrevious,
  addData,
  nextStep,
  previousStep,
  setStepOnCLick,
}) => (
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

MultiStepForm.propTypes = {
  Step: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  hasNext: PropTypes.isRequired,
  hasPrevious: PropTypes.isRequired,
  addData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  setStepOnCLick: PropTypes.func.isRequired,
}

export default MultiStepForm
