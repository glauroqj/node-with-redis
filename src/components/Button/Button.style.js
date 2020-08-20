import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${props => props.theme.button.base}
  ${props => props.theme.button[props.color]}
  ${props => props.theme.button[props.variant]}
  ${props => props.theme.button[props.size]}
  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.fullWidth && css`
    width: 100%;
  `};
  ${props => props.rounded && css`
    border-radius: 50%;
  `};
`
export const ButtonLoading = styled.button`
  pointer-events: none;
  cursor: not-allowed;
  outline: none;
  border: none;
  background-color: transparent;

  &:before {
    background-repeat: no-repeat;
    background-color: white;
    background-size: contain;
    background-position: center;
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    left: -1px;
    top: -1px;
  }
`