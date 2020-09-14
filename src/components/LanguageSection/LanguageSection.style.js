import styled, { css } from 'styled-components'

export const LanguageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  background-color: ${props => props.theme.color.c_secondary};
`
export const LanguageItem = styled.div`
  display: flex;
  padding: ${props => props.theme.space[4]};
`