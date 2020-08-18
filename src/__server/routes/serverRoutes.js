import {
  HOME_PAGE_URL,
  DASHBOARD_PAGE_URL,
  NOT_FOUND_URL,
  LOGIN_API_URL
} from 'configs/constants'

import dashboardPageController from '../controllers/dashboardPageController'
import homePageController from '../controllers/homePageController'
import notFoundPageController from '../controllers/notFoundPageController'
  
/**api */
import loginAPIController from '../controllers/loginAPIController'

export default app => {
  app.get(HOME_PAGE_URL, homePageController)
  app.get(DASHBOARD_PAGE_URL, dashboardPageController)

  /** node api */
  app.post(LOGIN_API_URL, loginAPIController)

  /** 404 */
  app.get(NOT_FOUND_URL, notFoundPageController)
}