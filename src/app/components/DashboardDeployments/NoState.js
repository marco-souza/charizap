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
  margin: -20px auto;
  border-radius: 50%;
  border: 2px solid ${getPropsBackground('stroke')};

  opacity: .5;
  width: 50%;
  padding-top: 50%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */

  div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    /* Horizontal Center */
    text-align: center;
    /* Vertical Center */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
