import React from 'react';
import routes from '../article';
import components from './components'

const concertRoutes = (props) => {
  const routeList = routes(components, 'concert/valley_of_the_wind')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default concertRoutes
