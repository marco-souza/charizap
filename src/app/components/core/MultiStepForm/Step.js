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
  className,
}) => {
  useMemo(() => {
    shouldRun &&
    !shouldRun(data) &&
    nextStep()
  })

  const onSubmit = () => {
    nextStep()
  }

  const onCancel = () => {
    previousStep()
  }

  return (
    <div className={className}>
      <div>{children}</div>

      {false && <button disabled={!hasPrevious} onClick={onCancel}>Cancel</button>}
      {false && <button disabled={!hasNext} onClick={onSubmit}>Next</button>}
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
  shouldRun: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Step.defaultProps = {
  shouldRun: () => true,
}

export default Step
