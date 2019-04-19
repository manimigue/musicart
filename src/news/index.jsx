import React from 'react';
import routes from '../article';
import components from './components'

const newsRoutes = (props) => {
  const routeList = routes(components, '/news')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default newsRoutes
