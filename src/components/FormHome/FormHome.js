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
  const { login, logout, userSession } = useContext(SessionContext)

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [step, setStep] = useState(userSession?.userName ? 'logged':'login')

  useEffect(() => {
    console.log('< FORM HOME : SESSION : CLIENT > ', userSession)

    userSession?.userName ? setStep('logged') : setStep('login')
  }, [userSession])


  return (
    <El.FormHomeContainer>

      {step === 'login' && (
        <El.FormBox>
          <h5>LOGIN</h5>
          <El.BoxInput>
            <Input 
              placeholder='email'
              size='lg'
              onChange={ value => setState({...state, email: value}) }
            />
          </El.BoxInput>
          <El.BoxInput>
            <Input 
              placeholder='password'
              size='lg'
              onChange={ value => setState({...state, password: value}) }
            />
          </El.BoxInput>
          <Button
            actionClick={async () => {
              const response = await login(state)
            }}
            // actionClick={() => history.push(`/player/142504352`)}
            color='secondary'
            size='lg'
          >
            Login
          </Button>

          <Button
            color='facebook'
            size='lg'
          >
            Facebook
          </Button>
        </El.FormBox>
      )}

      {step === 'logged' && (
        <El.FormBox>
          <h5>User logged: {`${userSession.userName}`}</h5>
          <Button
            actionClick={async () => {
              const response = await logout()
            }}
            // actionClick={() => history.push(`/player/142504352`)}
            color='secondary'
            size='lg'
          >
            Logout
          </Button>
        </El.FormBox>
      )}
      
    </El.FormHomeContainer>
  )     
}

export default withRouter(FormHome)