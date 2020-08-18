import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LanguageContext } from 'providers/Language'
// import Navbar from '../components/Navbar/Navbar'

// A Routes file is a good shared entry-point between client and server
import routes from './routes'

const Layout = () => {
  const { language, switchLanguage } = useContext(LanguageContext)

  return (
    <>
      {/* New <Switch> behavior introduced in React Router v4
        https://reacttraining.com/react-router/web/api/Switch */}
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
        {routes.map(route => <Route key={route.name} {...route} />)}
      </Switch>
    </>
  )
}

export default Layout