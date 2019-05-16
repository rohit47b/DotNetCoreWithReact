import React, { PureComponent } from 'react'
import VideoCall from './VideoCall'
import ChatRoomMobileAction from './ChatRoomMobileAction'

class OnlineCall extends PureComponent {
    render() {
        return (
           <div className="video-call-grid"> 
               <VideoCall/>
               <ChatRoomMobileAction />                  
            </div>
        )
    }
}



export default OnlineCall
