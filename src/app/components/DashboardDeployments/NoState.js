import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'app/components/core/Text'
import Button from 'app/components/core/Button'

import { getPropsBackground } from 'app/helpers/theme'

const NoState = ({
  src,
  text,
  buttonText,
  className,
  handleClick,
}) => (
  <div className={className}>
    <div>
      <img src={src} alt={text} />

      <Text>{text}</Text>

      <Button onClick={handleClick}>
        {buttonText}
      </Button>
    </div>
  </div>
)

NoState.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default styled(NoState)`
  width: 50vw;
  height: 50vw;
  max-width: 420px;
  max-height: 420px;

  display: flex;
  align-items: center;

  margin: -20px auto;
  border-radius: 50%;
  border: 1px solid ${getPropsBackground('stroke')};

  opacity: .5;
  box-sizing: border-box;

  div {
    text-align: center;
    width: 100%
  }
`
