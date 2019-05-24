import React from 'react'
import { Route } from 'react-router-dom'

import ViewerSignInLayout from './ViewerSignInLayout'


const ViewerSignInMainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={ matchProps => (
      <ViewerSignInLayout>
        <Component {...matchProps} />
      </ViewerSignInLayout>
    )} />
  )
};

export default ViewerSignInMainRoute;