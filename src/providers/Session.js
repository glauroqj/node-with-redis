import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

const SessionContext = React.createContext({
  login: () => {},
  logout: () => {},
  session: {}
})

// const arrayLang = ['pt', 'en', 'es']
// const _checkLangUrl = lang => arrayLang.includes(lang) ? lang : 'pt'

const SessionProvider = ({ children, session }) => {
  // const lang = _checkLangUrl( new URLSearchParams(useLocation().search).get('lang') )
  // const [language, setLanguage] = useState(lang)
  // const queryParams = new URLSearchParams(useLocation().search)
  
  console.log('< SESSION PROVIDER > ', session)
  
  useEffect(() => {
    // _updateLangUrl(lang)
  }, [])

  // const _updateLangUrl = lang => {
  //   console.log('< LANG > ',lang)
  //   /** update url query string lang */
  //   queryParams.set('lang', lang)
  //   window.history.replaceState({}, '', `${window.location.pathname}?${queryParams.toString()}`)
  // }

  // const switchLanguage = lang => {
  //   console.log('change language - provider')
  //   setLanguage(lang)
  //   _updateLangUrl(lang)
  // }

  const login = async payload => {
    console.log('< LOGIN PROVIDER >')

    try {
      const response = await fetch('/api-login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        // mode: 'no-cors',
        // cache: 'no-cache',
        // credentials: 'same-origin'
      })
      console.log('< LOGIN OK > ', response)

      return ''

    } catch (error) {
      console.warn('< LOGIN ERROR > ', error)
      return {
        error: 'error login'
      }
    }
  }

  const logout = () => {
    console.log('< LOGOUT PROVIDER >')
  }

  return (
    <SessionContext.Provider value={{ login, logout, session }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }

/**
  https://zgadzaj.com/development/javascript/how-to-change-url-query-parameter-with-javascript-only
*/