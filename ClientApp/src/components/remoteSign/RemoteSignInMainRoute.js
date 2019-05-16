import React from 'react'
import { Route } from 'react-router-dom'

import RemoteSignInLayout from './RemoteSignInLayout'


const RemoteSignInMainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={ matchProps => (
      <RemoteSignInLayout>
        <Component {...matchProps} />
      </RemoteSignInLayout>
    )} />
  )
};

export default RemoteSignInMainRoute;