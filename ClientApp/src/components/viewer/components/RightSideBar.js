import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
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

    render() {
        const { classes } = this.props;
       
        return (
            <div className={classes.rightSidebarContainer + " right-sidebar-container pdT0"}>
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
