import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
/** providers */
import { SessionContext } from 'providers/Session'
/** style */
import * as El from './FormHome.style'
/** components */
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const FormHome = ({history}) => {
  /** user session */
  const { login, session, test } = useContext(SessionContext)

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log('< FORM HOME : SESSION > ', session, login)
  }, [session])

  const callAPI = async () => {
    console.log(state)
    const response = await fetch('/api-login', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // mode: 'no-cors',
      // cache: 'no-cache',
      // credentials: 'same-origin'
    })

    console.log('< RESPONSE > ', response)


  }

  return (
    <El.FormHomeContainer>

      <El.FormBox>
        <h5>Please, insert your account ID</h5>
        <Input 
          placeholder='email'
          size='lg'
          onChange={ value => setState({...state, email: value}) }
        />
        <Input 
          placeholder='password'
          size='lg'
          onChange={ value => setState({...state, password: value}) }
        />
        <Button
          actionClick={() => callAPI() }
          // actionClick={() => history.push(`/player/142504352`)}
          color='secondary'
          size='lg'
        >
          Login
        </Button>
      </El.FormBox>
      
    </El.FormHomeContainer>
  )     
}

export default withRouter(FormHome)