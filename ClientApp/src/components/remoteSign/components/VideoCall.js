import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';


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
    },
    typography: {
        margin: theme.spacing.unit * 2,
    },
    
});


class VideoCall extends PureComponent {
    state = {
        anchorEl: null,
        open: false,
        openDialog: false,
        openReDialog: false
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
            open: true
        });
        console.log('open popup');
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            open: false,
            openDialog: false,
            openReDialog: false
        });
        console.log('close popup');
    };

    // open add viewer dialog
    openAddViewerDialog = () => {
        this.setState({
            anchorEl: null,
            open: false,
            openDialog: true,
            openReDialog: false
        });
        console.log('Dialog open');
    };

    // open add viewer dialog
    openReInviteDialog = () => {
        this.setState({
            openDialog: false,
            openReDialog: true
        });
        console.log('Re Dialog open');
    };

    render() {
        const { classes} = this.props;
        const { open, anchorEl, openDialog, openReDialog } = this.state

        return (
                <Card className={classes.card + " custom-card box-left-shadow"}>
                    <CardHeader
                        action={
                            <span className="horiz-more-btn">
                                <i className="fa fa-ellipsis-h" onClick={this.handleClick} aria-owns={this.open ? 'simple-popper' : undefined}
                                    aria-haspopup="true" aria-hidden="true"></i>
                            </span>
                        }
                        title="Document Name"
                        className="card-header card-padding"
                    />
                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}                        
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        className="add-viewer-popup popover_class"
                    >
                        <Typography onClick={this.openAddViewerDialog} className={classes.typography + " fnt-12"}><i className="fa fa-user-plus mrR7 fnt-13" aria-hidden="true"></i>Add Viewer</Typography>
                    </Popover>
                    <Dialog
                        open={openDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        fullWidth={true}
                        className="viewer-dialog-container"
                    >
                        <DialogTitle id="simple-dialog-title" className="viewer-dialog-header pdT12 pdB12">
                            <span className="flex-grow-1 fnt-14"><strong>Add Viewer</strong></span>
                            <i onClick={this.handleClose} className="fa fa-times-circle-o fnt-18" aria-hidden="true"></i>
                        </DialogTitle>
                        <DialogContent className="pd20">
                            <DialogContentText className="viewer-dialog-content">
                                <Typography component="p">Add Viewer Email address</Typography>
                            </DialogContentText>
                            <InputBase className={classes.input + " viewer-dialog-input fnt-12"} placeholder="Enter email address" />
                        </DialogContent>
                        <DialogActions className="viewer-dialog-action">
                            <Button onClick={this.openReInviteDialog} title="invite" variant="contained" color="primary" className="btn btn-common btn-blue mrL0">
                                Invite
                               </Button>
                            <Button onClick={this.handleClose} title="cancel" variant="contained" color="primary" className="btn btn-common btn-gray2">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={openReDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        fullWidth={true}
                        className="viewer-dialog-container"
                    >
                        <DialogTitle id="re-simple-dialog-title" className="viewer-dialog-header pdT12 pdB12">
                            <span className="flex-grow-1 fnt-14"><strong>Add Viewer</strong></span>
                            <i onClick={this.handleClose} className="fa fa-times-circle-o fnt-18" aria-hidden="true"></i>
                        </DialogTitle>
                        <DialogContent className="pd20">
                            <DialogContentText className="viewer-dialog-content">
                                <Typography component="p" className="fnt-14"><strong>Invitation Sent!</strong></Typography>
                                <Typography component="p" className="fnt-12 mrT15">Invitation has been sent to the viewer's email id.</Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions className="viewer-reinvite-dialog-action">
                            <Button onClick={this.openAddViewerDialog} title="invite" variant="contained" color="primary" className="btn btn-common btn-blue mrL0">
                                Re-Invite
                               </Button>
                            <Button onClick={this.handleClose} title="cancel" variant="contained" color="primary" className="btn btn-common btn-gray2">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <div className="client-img-container">
                        <div className="action-btn mrT20 mrR15">
                            <span className="vid-cam"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                            <span className="microphone mrT8"><i className="fa fa-microphone-slash" aria-hidden="true"></i></span>
                        </div>
                        <div className="client-row d-flex">
                            <div className="client-box1">
                                <img src="/assets/images/Image 19.png" alt="text" />
                                <Chip label="John Smith" className={classes.chip + " chip1"} />
                                <div className="client-action-btn">
                                    <span className="microphone"><i className="fa fa-microphone-slash" aria-hidden="true"></i></span>
                                    <span className="vid-cam"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="client-box2">
                                <img src="/assets/images/Image 21.png" alt="text" />
                                <Chip label="Kendall Sample" className={classes.chip + " chip2"} />
                                <div className="client-action-btn">
                                    <span className="microphone"><i className="fa fa-microphone-slash" aria-hidden="true"></i></span>
                                    <span className="vid-cam"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
        )
    }
}

VideoCall.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoCall)
