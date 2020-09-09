import bodyParser from 'body-parser'

import {
  LOGIN_API_URL,
  LOGOUT_API_URL
} from 'configs/constants'

/**api */
import loginAPIController from 'server/controllers/loginAPIController'
import logoutAPIController from 'server/controllers/logoutAPIController'

export default app => {
  app.use(bodyParser.json())
  app.post(LOGIN_API_URL, loginAPIController)
  app.get(LOGOUT_API_URL, logoutAPIController)
}