import React from 'react';
import routes from '../article';
import components from './components'

const stayHomeRoutes = (props) => {
  const routeList = routes(components, 'stayHome')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default stayHomeRoutes
