/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 15:28:46 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 15:28:46 
 */
import NotFound from 'components/404';
import SidebarMainRoute from 'components/app/SidebarMainRoute';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from './components/chat';
import ChatMessages from './components/chat/ChatMessages';
import ClosingRoom from './components/ClosingRoom';
import ClosingRoomInfo from './components/closingRoomInfo';
import ClosingRoomPdf from './components/closingRoomPdf';
import ClosingRoomReview from './components/closingRoomReview';
import Welcome from './components/welcome';




 export function ClosingRoomWizardRoute(url){
    return (
        <Switch>
            <SidebarMainRoute exact path={`${url}/closing-room`} component={ClosingRoom} />
            <SidebarMainRoute exact path={`${url}/closing-room/chat`} component={Chat} />
            <SidebarMainRoute exact path={`${url}/closing-room/chat/messages`} component={ChatMessages} />
            <SidebarMainRoute exact path={`${url}/closing-room/welcome`} component={Welcome} />
            <SidebarMainRoute exact path={`${url}/closing-room/info`} component={ClosingRoomInfo} />
            <SidebarMainRoute exact path={`${url}/closing-room/pdf`} component={ClosingRoomPdf} />
            <SidebarMainRoute exact path={`${url}/closing-room/review`} component={ClosingRoomReview} />
          <Route component={NotFound} />
        </Switch>
    )
};