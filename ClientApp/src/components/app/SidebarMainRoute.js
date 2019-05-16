import React from 'react'
import { Route } from 'react-router-dom'

import SidebarLayout from './SidebarLayout'


const SidebarMainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={ matchProps => (
      <SidebarLayout>
        <Component {...matchProps} />
      </SidebarLayout>
    )} />
  )
};

export default SidebarMainRoute;