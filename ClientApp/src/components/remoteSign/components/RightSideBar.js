import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import history from 'customHistory';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ChatRoomMobileAction from './ChatRoomMobileAction';
import GroupChat from './GroupChat';
import VideoCall from './VideoCall';


const styles = theme => ({
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
    }
});


class RightSideBar extends PureComponent {

    handleStartClick = () => {
        history.push('/app/remote-sign/signing-room')
    }

    handleEndClick = () => {
        history.push('/app/remote-sign/welcome')
    }
   
    render() {
        const { classes, isStart } = this.props;
        let button;
        if (isStart) {
            button = <Button onClick={this.handleStartClick} variant="contained" color="primary" className="width-100 square-btn btn-blue fnt-16">
                Start Closing
            </Button>
        } else {
            button = <div><Button onClick={this.handleEndClick} variant="raised" color="primary" className="width-100 square-btn btn-red fnt-16 end-closing-btn">
                End Closing
            </Button>
            <ChatRoomMobileAction />
            </div>
        }
        return (
            <div className={classes.rightSidebarContainer + " right-sidebar-container"}>
                {button}
                <VideoCall/>
                <GroupChat/>
            </div>
        )
    }
}

RightSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightSideBar)
