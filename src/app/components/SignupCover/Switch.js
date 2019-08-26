import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getPropsBackground, getPropsColor, getFont } from 'app/helpers/theme'

import lonely from 'assets/images/lonely.gif'
import meditating from 'assets/images/meditating.gif'

import 'animate.css/animate.min.css'

const options = {
  lonely,
  meditating,
}

const Switch = ({ className }) => {
  const [selected, setSelected] = useState(options.meditating)
  const isSelected = option =>
    selected === option
      ? `selected animated ${option === options.meditating
        ? 'slideInLeft'
        : 'slideInRight'
      }`
      : ''

  return (
    <div className={className}>
      <div className='switcher'>
        <span
          onClick={() => setSelected(options.lonely)}
          className={isSelected(options.lonely)}
        >
          Lonely
        </span>
        <span
          onClick={() => setSelected(options.meditating)}
          className={isSelected(options.meditating)}
        >
          Be Happy
        </span>
      </div>

      <div className='imageCover'>
        <img src={selected} alt='devopness' />
      </div>
    </div>
  )
}

Switch.propTypes = {
  className: PropTypes.string,
}

export default styled(Switch)`
  background-color: ${getPropsBackground()};
  position: relative;
  height: 80vh;

  & .imageCover {
    width:100%;
    left: 0;
    bottom:0;
    position: absolute;
    max-height: 90%;

    & img {
      max-width: 100%;
    }
  }

  & > .switcher {
    margin: 0 40px;
    padding: 3px;
    display: flex;
    background-color: ${getPropsBackground('stroke')};
    border-radius: 20px;

    span {
      flex-grow: 1;
      margin: 0;
      font-size: .8em;
      padding: 10px;
      color: ${getPropsColor()};
      border-radius: 20px 20px;
      text-transform: uppercase;
      font-family: ${getFont('robotoDefault')};
      cursor: pointer;
    }

    .selected {
      background-color: ${getPropsColor()};
      color: ${getPropsBackground()};
    }
  }
`
