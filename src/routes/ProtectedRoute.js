/* Core ----------------------------------------------------- */
import React from 'react'
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
  const { userSession } = useContext(SessionContext)

  return (
    <Route
      {...rest}
      render={props =>
  
        (userSession.userId && userSession.userName)
        
        ? <Component {...props} {...routeStore} />
        : <>
            { (typeof document === 'undefined')
              /** server */
              ? (
                  console.log('< PROTECTED ROUTES REDIRECT : SERVER > ', )
                )
              /** client */
              : <> 
                  { console.log('< PROTECTED ROUTES REDIRECT : CLIENT > ') }
                  { window.location.replace('/') }
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
