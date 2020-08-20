import styled, { css } from 'styled-components'

export const FormHomeContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`
export const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  > h5 {
    margin: 15px 0;
  }
  > button {
    margin: 15px 0;
    justify-content: center;
  }
`