/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 15:28:46 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 15:28:46 
 */
import NotFound from 'components/404';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewerSignInMainRoute from './ViewerSignInMainRoute'
import SigningRoom from './components/SigningRoom'
import OnlineCall from './components/OnlineCall'
import OnlineChat from './components/OnlineChat'

 export function ViewerSignRoute(url){
    return (
        <Switch>
            <ViewerSignInMainRoute exact path={`${url}/signing-room`} component={SigningRoom} />
            <ViewerSignInMainRoute path={`${url}/online-chat`} component={OnlineChat} />
            <ViewerSignInMainRoute path={`${url}/online-call`} component={OnlineCall} />
              <Route component={NotFound} />
        </Switch>
    )
};