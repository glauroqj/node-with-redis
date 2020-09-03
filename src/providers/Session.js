import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

const SessionContext = React.createContext({
  login: () => {},
  logout: () => {},
  userSession: {}
})


const SessionProvider = ({ children, session }) => {

  const [userSession, setUserSession] = useState(session)
  
  console.log('< SESSION PROVIDER > ', session)
  
  useEffect(() => {
    // _updateLangUrl(lang)
  }, [])

  const login = async payload => {
    console.log('< LOGIN PROVIDER >')

    try {
      const response = await fetch('/api-login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // mode: 'no-cors',
        // cache: 'no-cache',
        // credentials: 'same-origin'
      })
      
      if (response.ok && response.status === 200) {
        const sessionResponse = await response.json()
        console.log('< LOGIN OK > ', sessionResponse )
        setUserSession(sessionResponse)
        return true
      }

    } catch (error) {
      console.warn('< LOGIN ERROR > ', error)
      return error
    }
  }

  const logout = () => {
    console.log('< LOGOUT PROVIDER >')
  }

  return (
    <SessionContext.Provider value={{ login, logout, userSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }

/**
  https://zgadzaj.com/development/javascript/how-to-change-url-query-parameter-with-javascript-only
*/