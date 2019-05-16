import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { PureComponent } from 'react';
import history from 'customHistory'

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
        width: "90%"
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

class ChatMessages extends PureComponent {
    state = {
        open: false,
        dense: false,
        secondary: false,
        displayChat : false,
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }


    render() {
        return (
            <Card className="card">
                <Grid container className="chat-room">
                    <Grid item xs={12} sm={8} md={8} lg={9} xl={10} className="right-chat-container pdB0">
                        <div className="active-chat-box d-flex align-items-center">
                            <span className="mrR15"  onClick={() => history.push('/app/notary/closing-room/chat')}><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                            <Avatar aria-label="Recipe" className="list-avatar blue-circle mrR15">
                                <i className="fa fa-file-o" aria-hidden="true"></i>
                            </Avatar>
                            <span>AB Document</span>
                        </div>
                        <div className="right-inner-chat-container right-chat-container-mobile">
                            <List>
                                <ListItem>
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        KS
                                    </Avatar>
                                    <ListItemText className="chat-item-header-text" primary={
                                        <React.Fragment>
                                            <Typography className="light-text fnt-12">
                                                Kendall Sample
                                        </Typography>
                                            <Typography className="fnt-10">
                                                Today, 4.30
                                        </Typography>
                                        </React.Fragment>
                                    } secondary={
                                        <React.Fragment>
                                            <Typography className="sub-header-text fnt-12"  color="textPrimary">
                                                <strong>Test message on chat</strong>
                                            </Typography>
                                        </React.Fragment>
                                    } />
                                </ListItem>
                                <Divider className="chat-divider" />
                                <ListItem>
                                    <Avatar aria-label="Recipe" className="list-avatar lt-red-circle">
                                        JH
                                </Avatar>
                                    <ListItemText className="chat-item-header-text" primary={
                                        <React.Fragment>
                                            <Typography className="fnt-12">
                                                John Hancock
                                        </Typography>
                                            <Typography className="fnt-10">
                                                Today, 4.29
                                        </Typography>
                                        </React.Fragment>
                                    } secondary={
                                        <React.Fragment>
                                            <Typography className="sub-header-text fnt-12" color="textPrimary">
                                                <strong>Mr Kendall,</strong><br></br>
                                                <strong>Welcome to Closing Document</strong>
                                            </Typography>
                                        </React.Fragment>
                                    } />
                                </ListItem>
                            </List>
                            <Divider className="input-border" />
                            <div className="chat-input d-flex align-items-center" elevation={1}>
                                <i className="fa fa-smile-o smile-ic" aria-hidden="true"></i>
                                <InputBase className="flex-grow-1 fnt-14" placeholder="Type your message" />
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* <NewClosingPackageDialog isOpen={open} handleCloseDialog={this.handleCloseDialog}/> */}
            </Card>
        )
    }
}

export default withStyles(styles)(ChatMessages)
