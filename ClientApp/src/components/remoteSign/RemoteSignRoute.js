/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 15:28:46 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 15:28:46 
 */
import NotFound from 'components/404';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SigningRoom from './components/SigningRoom'
import Welcome from './components/Welcome';
import RemoteSignInMainRoute from './RemoteSignInMainRoute'
import OnlineCall from './components/OnlineCall'
import OnlineChat from './components/OnlineChat'

 export function RemoteSignRoute(url){
    return (
        <Switch>
            <RemoteSignInMainRoute exact path={`${url}/signing-room`} component={SigningRoom} />
            <RemoteSignInMainRoute path={`${url}/welcome`} component={Welcome} />
            <RemoteSignInMainRoute path={`${url}/online-chat`} component={OnlineChat} />
            <RemoteSignInMainRoute path={`${url}/online-call`} component={OnlineCall} />
          <Route component={NotFound} />
        </Switch>
    )
};