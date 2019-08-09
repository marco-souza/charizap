import React from 'react'
import PropTypes from 'prop-types'

import Cover from 'app/components/core/Cover'

import Button from 'app/components/core/Button'

const SignupCover = ({ className }) => (
  <Cover
    message='Focus on what really matters and leave it to us'
    className={className}
    logo='colored'
    padding='40px'
    renderBelow
    moreSpace
  >

    <div>
      <Button variant='contained' >Be Happy</Button>
      <Button variant='outlined' >Lonely</Button>
    </div>

  </Cover>
)

SignupCover.propTypes = {
  className: PropTypes.string,
}

export default SignupCover
