import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

const SessionContext = React.createContext({
  language: '',
  login: () => {},
  logout: () => {},
  switchLanguage: () => console.log("change language - context")
})

// const arrayLang = ['pt', 'en', 'es']
// const _checkLangUrl = lang => arrayLang.includes(lang) ? lang : 'pt'

const SessionProvider = ({ children, session }) => {
  // const lang = _checkLangUrl( new URLSearchParams(useLocation().search).get('lang') )
  // const [language, setLanguage] = useState(lang)
  // const queryParams = new URLSearchParams(useLocation().search)
  

  useEffect(() => {
    // _updateLangUrl(lang)
  }, [])

  const _updateLangUrl = lang => {
    console.log('< LANG > ',lang)
    /** update url query string lang */
    queryParams.set('lang', lang)
    window.history.replaceState({}, '', `${window.location.pathname}?${queryParams.toString()}`)
  }

  const switchLanguage = lang => {
    console.log('change language - provider')
    setLanguage(lang)
    _updateLangUrl(lang)
  }

  return (
    <SessionContext.Provider value={{ language, switchLanguage }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }

/**
  https://zgadzaj.com/development/javascript/how-to-change-url-query-parameter-with-javascript-only
*/