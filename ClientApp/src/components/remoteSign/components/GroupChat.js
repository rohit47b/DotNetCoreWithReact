import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AddGroupChat from './AddGroupChat';

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
    chip: {
        borderColor: "#0073cf !important",
    }

});


class GroupChat extends PureComponent {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state
        return (

            <Card className={classes.card + " custom-card box-left-shadow group-chat-card"}>
                <CardHeader
                    action={
                        <span className="horiz-more-btn">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </span>
                    }
                    title="Document Name"
                    className="card-header card-padding "
                />
                <Typography component="div" className="card-padding client-chat" style={{ display: "flex", alignItems: "center" }}>
                    <Chip
                        label="Group"
                        className={classes.chip}
                        color="primary"
                        variant="outlined"
                    />
                    <AddIcon onClick={this.handleClickOpen} style={{ color: "#0073cf", marginLeft: "5px", cursor: "pointer" }} fontSize="large" />
                </Typography>
                {open === false ? <List className="chat-container">
                    <ListItem>
                        <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                            NA
                        </Avatar>
                        <ListItemText className="chat-item-header-text">
                            <div className="d-flex">
                                <Typography>
                                    Notary
                                 </Typography>
                                <Typography>
                                    3.40pm
                                </Typography>
                            </div>
                            <Typography className="sub-header-text" color="textPrimary">
                                <strong>Welcome to the remote eSign wizard, this is chat screen</strong>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider className="chat-list-divider" />
                    <ListItem>
                        <Avatar aria-label="Recipe" className="list-avatar brown-circle">
                            NA
                        </Avatar>
                        <ListItemText className="chat-item-header-text">
                            <div className="d-flex">
                                <Typography>
                                    John Smith
                                </Typography>
                                <Typography>
                                    3.40pm
                                </Typography>
                            </div>
                            <Typography className="sub-header-text" color="textPrimary">
                            <strong>I am connected here on chat.</strong>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider className="chat-list-divider" />
                    <ListItem>
                        <Avatar aria-label="Recipe" className="list-avatar purple-circle">
                            NA
                        </Avatar>
                        <ListItemText className="chat-item-header-text">
                            <div className="d-flex">
                                <Typography>
                                    Kendall Sample
                                </Typography>
                                <Typography>
                                    3.40pm
                                </Typography>
                            </div>
                            <Typography className="sub-header-text" color="textPrimary">
                            <strong>Hi Notary, Thank you for this awesome application to connect.</strong>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider className="chat-container-bottom-divider" />
                </List> : <AddGroupChat isClose={this.handleClose} />
                }

                <Paper className="msg-container d-flex align-items-center" elevation={1}>
                    <InputBase className={classes.input + " flex-grow-1 fnt-14"} placeholder="Type your message" />
                    <i className="fa fa-arrow-right" color="disabled" aria-hidden="true"></i>
                </Paper>
            </Card>

        )
    }
}

GroupChat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupChat)
