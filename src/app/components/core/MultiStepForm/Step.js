import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const Step = ({
  data,
  nextStep,
  shouldRun,
  children,
  className,
}) => {
  useMemo(() => {
    shouldRun &&
    !shouldRun(data) &&
    nextStep()
  })

  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  )
}

Step.propTypes = {
  data: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  shouldRun: PropTypes.func,
  className: PropTypes.string,
}

Step.defaultProps = {
  shouldRun: () => true,
}

export default Step
