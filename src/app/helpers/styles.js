import { css } from 'styled-components'

export const removeBlueMark = css`
  outline: none;

  & textarea:focus, input:focus{
    outline: none;
  }

  & *:focus {
    outline: none;
  }
`
