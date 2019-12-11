import React from 'react';
import routes from '../article';
import components from './components'

const memberRoutes = (props) => {
  const routeList = routes(components, 'member')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default memberRoutes
