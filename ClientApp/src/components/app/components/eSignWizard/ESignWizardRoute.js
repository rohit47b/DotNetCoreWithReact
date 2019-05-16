/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 15:28:46 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 15:28:46 
 */
import React from 'react'

import { Route, Switch } from 'react-router-dom'

import MainRoute from 'components/app/MainRoute'
import NotFound from 'components/404'
import Review from './components/Review'
import Welcome from './components/Welcome'
import SigningRoom from './components/SigningRoom'
import SigningRoomDetails from './components/SigningRoomDetails'

 export function ESignWizardRoute(url){
    return (
       
        <Switch>
            <MainRoute exact path={`${url}/review`} component={Review} />
            <MainRoute exact path={`${url}/welcome`} component={Welcome} />
            <MainRoute exact path={`${url}/signing-room`} component={SigningRoom} />
            <MainRoute exact path={`${url}/signing-room-details`} component={SigningRoomDetails} />
            <Route component={NotFound} />
        </Switch>
    )
};