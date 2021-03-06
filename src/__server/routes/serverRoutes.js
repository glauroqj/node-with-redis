import {
  HOME_PAGE_URL,
  DASHBOARD_PAGE_URL,
  NOT_FOUND_URL
} from 'configs/constants'

import dashboardPageController from 'server/controllers/dashboardPageController'
import homePageController from 'server/controllers/homePageController'
import notFoundPageController from 'server/controllers/notFoundPageController'

export default app => {
  app.get(HOME_PAGE_URL, homePageController)
  app.get(DASHBOARD_PAGE_URL, dashboardPageController)
  
  /** node api */
  // app.use( bodyParser.urlencoded({ extended: false }) )
  // app.use(bodyParser.json())
  // app.post(LOGIN_API_URL, loginAPIController)

  /** 404 */
  app.get(NOT_FOUND_URL, notFoundPageController)
}