import styled, { css } from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${props => props.theme.color.c_secondary};
  justify-content: center;
  align-items: center;
`