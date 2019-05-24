import ChatIcon from '@material-ui/icons/Chat';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import VideoIcon from '@material-ui/icons/Videocam';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';


class ChatRoomMobileAction extends PureComponent {

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><NavLink to='/app/viewer/signing-room' activeClassName="active"> <FileIcon /></NavLink></li>
                    <li><NavLink to='/app/viewer/online-call' activeClassName="active"> <VideoIcon /></NavLink></li>
                    <li><NavLink to='/app/viewer/online-chat' activeClassName="active"><ChatIcon /></NavLink></li>
                </ul>
            </div>

        )
    }
}


export default ChatRoomMobileAction