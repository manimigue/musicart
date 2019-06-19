import React from 'react';
import routes from '../article';
import components from './components'

const concertRoutes = (props) => {
  const routeList = routes(components, 'concert/light_and_magic')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default concertRoutes
