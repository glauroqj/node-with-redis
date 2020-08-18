import React from 'react'
/** style */
import * as El from './Home.style'
/** components */
import FormHome from 'components/FormHome/FormHome'

const Home = () => {
  return (
    <El.HomeContainer>
      <FormHome />
    </El.HomeContainer>
  )     
}

export default Home