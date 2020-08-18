import {
    HOME_PAGE_URL,
    DASHBOARD_PAGE_URL,
    NOT_FOUND_URL
  } from 'configs/constants'
  
  import dashboardPageController from '../controllers/dashboardPageController'
  import homePageController from '../controllers/homePageController'
  import notFoundPageController from '../controllers/notFoundPageController'
  
  export default app => {
    app.get(HOME_PAGE_URL, homePageController)
    app.get(DASHBOARD_PAGE_URL, dashboardPageController)
    /** 404 */
    app.get(NOT_FOUND_URL, notFoundPageController)
  }