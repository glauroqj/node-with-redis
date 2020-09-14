/* Core ----------------------------------------------------- */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
/** providers */
import { SessionContext } from 'providers/Session'

const ProtectRoute = (
  {
    component: Component,
    ...rest
  }) => {
  /** user session */
  const { userSession, redirectFromServer, redirectFromClient } = useContext(SessionContext)
  console.log('< PROTECTED ROUTE > ', userSession.userID, userSession.userName, userSession )

  return (
    <Route
      {...rest}
      render={props =>
  
        (userSession.userID && userSession.userName)
        
        ? <Component {...props} {...rest} />
        : <>
            { (typeof document === 'undefined')
              /** server */
              ? (
                console.log('< PROTECTED ROUTES REDIRECT : SERVER > ', ),
                redirectFromServer()
                )
              /** client */
              : <> 
                  { console.log('< PROTECTED ROUTES REDIRECT : CLIENT > ') }
                  {/* { window.location.replace('/') } */}
                  {redirectFromClient()}
                  <div>Loading...</div>
                </>
            }
          </>
      }
    />
  )
}

ProtectRoute.propTypes = {
  component: PropTypes.func
}

export default ProtectRoute
