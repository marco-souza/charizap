import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const Step = ({
  step,
  data,
  hasNext,
  hasPrevious,
  addData,
  nextStep,
  previousStep,
  shouldRun,
  children,
}) => {
  useMemo(() => {
    shouldRun &&
    !shouldRun() &&
    nextStep()
  })

  const onSubmit = () => {
    nextStep()
  }

  const onCancel = () => {
    previousStep()
  }

  return (
    <div>
      <div>{children}</div>

      <button disabled={!hasPrevious} onClick={onCancel}>Cancel</button>
      <button disabled={!hasNext} onClick={onSubmit}>Next</button>
    </div>
  )
}

Step.propTypes = {
  step: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  addData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  shouldRun: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Step
