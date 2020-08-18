import {
    HOME_PAGE_URL,
    DASHBOARD_PAGE_URL,
    NOT_FOUND_URL
  } from 'configs/constants'
  
  import Home from 'pages/Home/Home'
  import Dashboard from 'pages/Dashboard/Dashboard'
  import NotFound from 'pages/NotFound/NotFound'
  
  const routes = [
    {
      path: HOME_PAGE_URL,
      name: 'home',
      exact: true,
      component: Home,
    },
    {
      path: DASHBOARD_PAGE_URL,
      name: 'Dashboard',
      exact: false,
      component: Dashboard,
    },
    {
      path: NOT_FOUND_URL,
      name: 'notFound',
      exact: false,
      component: NotFound,
    }
  ]
  
  export default routes