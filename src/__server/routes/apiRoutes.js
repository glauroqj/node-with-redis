import bodyParser from 'body-parser'

import {
  LOGIN_API_URL
} from 'configs/constants'

/**api */
import loginAPIController from 'server/controllers/loginAPIController'

export default app => {
  app.use(bodyParser.json())
  app.post(LOGIN_API_URL, loginAPIController)
}