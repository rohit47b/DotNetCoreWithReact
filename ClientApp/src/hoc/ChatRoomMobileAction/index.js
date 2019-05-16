import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import CameraIcon from '@material-ui/icons/CameraAlt';
import ChatIcon from '@material-ui/icons/Chat';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';
import history from 'customHistory'

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    [theme.breakpoints.down('sm')]: {
        signClosingWizard: {
            padding: '20px',
        },
        rightSidebarContainer: {
            paddingTop: '0px',
        },
        heading: {
            marginBottom: '20%',
        }
    },
    typography: {
        margin: theme.spacing.unit * 2,
    },
    avatar: {
        backgroundColor: "#0073CF !important",
        width: 35,
        height: 35,
    }
});


class ChatRoomMobileAction extends PureComponent {
    state = {        
    }
   
    render() {
        const { classes } = this.props;   

        return (
            <Grid container className="mobile-bottom-action-btn" justify="space-evenly" alignItems="center">
                <Avatar  className={classes.avatar + " bottom-nav-icon"} >
                    <FileIcon  />
                </Avatar>
                <Avatar  onClick={() => history.push('/app/remote-sign/video-chat')} className={classes.avatar + " bottom-nav-icon"}>
                    <CameraIcon />
                </Avatar>
                <Avatar className={classes.avatar + " bottom-nav-icon"}>
                    <ChatIcon />
                </Avatar>
                <Avatar className={classes.avatar + " bottom-nav-icon"}>
                    <PowerIcon />
                </Avatar>
            </Grid>
        )
    }
}

ChatRoomMobileAction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatRoomMobileAction)
