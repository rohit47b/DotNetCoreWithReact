import React, { PureComponent } from 'react'
import GroupChat from './GroupChat'
import ChatRoomMobileAction from './ChatRoomMobileAction'

class OnlineChat extends PureComponent {

    render() {
        return (
            <div className="group-chat">
                <GroupChat/>
                <ChatRoomMobileAction />       
            </div>
        )
    }
}

export default OnlineChat
