import styled from 'styled-components'

import Component from './component'

export default styled(Component)`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts};
  text-align: left;

  & > label {
    color: ${({ theme }) => theme.colors.secondary};

    font-size: .85em;
    padding: 10px 0;
  }

  & > input {
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.strokeBackground};
    background-color: ${({ theme }) => theme.colors.background};

    font-size: .85em;
    border-radius: 20px 20px;
    padding: 10px 20px;

    &:hover, &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondaryVariant};
    }
  }
`
