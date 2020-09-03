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
  const { login, session } = useContext(SessionContext)

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [step, setStep] = useState('login')

  useEffect(() => {
    console.log('< FORM HOME : SESSION > ', session, login)
  }, [session])

  const callAPI = async () => {
    const response = await login(state)

  }

  return (
    <El.FormHomeContainer>

      {step === 'login' && (
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
      )}

      {step === 'logged' && (
        <El.FormBox>
          <h5>User logged: {`${JSON.stringify(session)}`}</h5>
        </El.FormBox>
      )}
      
    </El.FormHomeContainer>
  )     
}

export default withRouter(FormHome)