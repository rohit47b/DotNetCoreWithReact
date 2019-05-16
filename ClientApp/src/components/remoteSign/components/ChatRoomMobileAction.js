import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ChatIcon from '@material-ui/icons/Chat';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import VideoIcon from '@material-ui/icons/Videocam';
import history from 'customHistory';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';


class ChatRoomMobileAction extends PureComponent {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    }

    render() {
        const { open } = this.state;
        return (
            <div className="navbar">
                <ul>
                    <li><NavLink to='/app/remote-sign/signing-room' activeClassName="active"> <FileIcon /></NavLink></li>
                    <li><NavLink to='/app/remote-sign/online-call' activeClassName="active"> <VideoIcon /></NavLink></li>
                    <li><NavLink to='/app/remote-sign/online-chat' activeClassName="active"><ChatIcon /></NavLink></li>
                    <li>
                        <span onClick={this.handleClickOpen}>
                            <PowerIcon />
                        </span>
                    </li>
                </ul>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you want to close this chat.
                 </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => history.push('/app/remote-sign/welcome')} color="primary" className="btn btn-primary btn-sm">
                            Yes
                  </Button>
                        <Button onClick={this.handleClose} color="primary" className="btn btn-gray btn-sm" autoFocus>
                            No
                 </Button>
                    </DialogActions>
                </Dialog>
            </div>
            // <Grid container className="mobile-bottom-action-btn justify-content-center" justify="space-evenly" alignItems="center">
            //     <Grid item xs={3} sm={3} className="nav-link">
            //         <Avatar onClick={() => history.push('/app/remote-sign/signing-room')} className={classes.avatar + " bottom-nav-icon active-btn"} >
            //             <FileIcon />
            //         </Avatar>
            //     </Grid>
            //     <Grid item xs={3} sm={3} className="nav-link">
            //         <Avatar onClick={() => history.push('/app/remote-sign/online-call')} className={classes.avatar + " bottom-nav-icon"}>
            //             <VideoIcon />
            //         </Avatar>
            //     </Grid>
            //     <Grid item xs={3} sm={3} className="nav-link">
            //         <Avatar onClick={() => history.push('/app/remote-sign/online-chat')} className={classes.avatar + " bottom-nav-icon"}>
            //             <ChatIcon />
            //         </Avatar>
            //     </Grid>
            //     <Grid item xs={3} sm={3} className="nav-link">
            //         <Avatar onClick={this.handleClickOpen} className={classes.avatar + " bottom-nav-icon"}>
            //             <PowerIcon />
            //         </Avatar>
            //     </Grid>

            // </Grid>

        )
    }
}


export default ChatRoomMobileAction