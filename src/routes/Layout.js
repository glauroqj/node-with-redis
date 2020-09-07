import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
/** providers */
import { LanguageContext } from 'providers/Language'
// import Navbar from '../components/Navbar/Navbar'

// A Routes file is a good shared entry-point between client and server
import routes from './routes'
import ProtectedRoute from './ProtectedRoute'

const Layout = () => {
  const { language, switchLanguage } = useContext(LanguageContext)

  return (
    <>
      {/* <Navbar /> */}
      <ul>
        <li>Language: {language}</li>
        <li>
          <button onClick={() => switchLanguage('pt')}>PT</button>
          <button onClick={() => switchLanguage('en')}>EN</button>
          <button onClick={() => switchLanguage('es')}>ES</button>
        </li>
      </ul>
      <Switch>
        {routes.map(route => 
          route.protected 
          ? <ProtectedRoute key={route.name} component={route.component} {...route} />
          : <Route key={route.name} {...route} />
        )}
      </Switch>
    </>
  )
}

export default Layout