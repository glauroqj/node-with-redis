import styled, { css } from 'styled-components'

const inputPaddingSize = (theme, size) => {
  const options = {
    'sm': `${theme.space[8]} ${theme.space[12]}`,
    'md': `${theme.space[12]}`,
    'lg': `${theme.space[16]}`
  }
  return options[size]
}

const inputFontSize = (theme, size) => {
  const options = {
    'sm': `${theme.typography.fontSize[14]}`,
    'md': `${theme.typography.fontSize[16]}`,
    'lg': `${theme.typography.fontSize[18]}`
  }
  return options[size]
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.color.c_grey};
  border: 1px solid ${props => props.hasFocus ? props.theme.color.c_main : props.theme.color.c_grey};
  border-radius: 6px;
  padding: ${props => inputPaddingSize(props.theme, props.size)};
  font-size: ${props => inputFontSize(props.theme, props.size)};
  transition: border-color .3s ease;

  ${props => props.hasError && css`
    border-color: ${props => props.theme.color.c_danger};
  `}
`
export const Input = styled.input`
  order: 2;
  width: 100%;
  color: ${props => props.theme.color.c_grey};
  border: none;
  border-radius: 6px;
  padding: ${props => inputPaddingSize(props.theme, props.size)};
  font-size: ${props => inputFontSize(props.theme, props.size)};
  font-weight: ${props => props.theme.typography.fontWeight['normal']};
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`
export const InputStartAdornment = styled.div`
  order: 1;

  > button {
    padding: ${props => inputPaddingSize(props.theme, props.size)};
  }
`
export const InputEndAdornment = styled.div`
  order:3;

  > button {
    padding: ${props => inputPaddingSize(props.theme, props.size)};
  }
`
