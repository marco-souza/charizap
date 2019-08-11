import styled from 'styled-components'
import useAuth from 'app/redux/auth'

import Component from './component'

export default useAuth(styled(Component)`
  max-width: 430px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
`)
