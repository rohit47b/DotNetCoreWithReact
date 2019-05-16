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
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import React, { PureComponent } from 'react';
import ChatRoomSideBar from '../../../../../../hoc/ChatRoomSideBar';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoneIcon from '@material-ui/icons/Done';

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

class Chat extends PureComponent {
    state = {
        open: false,
        dense: false,
        secondary: false,
        displayChat: false,
        openDropdown: false,
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }

    handleToggle = () => {
        this.setState(state => ({ openDropdown: !state.openDropdown }));
      }
    
      handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
        this.setState({ openDropdown: false });
      }


    render() {
        const { classes } = this.props;
        const {openDropdown}=this.state
        return (
            <Card className="card">
                <Typography className="card-header" component="div">
                    <span className="card-title pdT6 pdB6">
                        Chat Room
                        {/* <HelpIcon /> */}
                    </span>
                </Typography>
                {/* <Calendar/> */}
                <Grid container className="chat-room">
                    <Grid item xs={12} sm={4} md={4} lg={3} xl={2} className="left-chat-bar">
                        <div className="search-box">
                            <div>
                                <i className="fa fa-search search-ic" aria-hidden="true"></i>
                                <InputBase className={classes.input} placeholder="Search" />
                            </div>
                        </div>
                        <div className="recent-chat text-center">
                            <Button
                                buttonRef={node => {
                                    this.anchorEl = node;
                                }}
                                aria-owns={openDropdown ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                            >
                                Recent Chat <DownIcon/>
                            </Button>
                        </div>
                        <Popper className="dropdown" open={openDropdown} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper className="dropdown-menu">
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                            <MenuList className="dropdown-menu-list">
                                                <MenuItem className="dropdown-menu-list-item" onClick={this.handleClose}><DoneIcon/>Recent Chat</MenuItem>
                                                <MenuItem className="dropdown-menu-list-item" onClick={this.handleClose}>Unread Chatt</MenuItem>
                                                <MenuItem className="dropdown-menu-list-item" onClick={this.handleClose}>Sort by Name</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <ChatRoomSideBar displayChat={this.displayChatBox} />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={9} xl={10} className="right-chat-container xs-hidden pdB0">
                        <div className="active-chat-box d-flex align-items-center">
                            <span className="mrR15"><i className="fa fa-arrow-left" aria-hidden="true"></i></span>
                            <Avatar aria-label="Recipe" className="list-avatar blue-circle mrR15">
                                <i className="fa fa-file-o" aria-hidden="true"></i>
                            </Avatar>
                            <span>AB Document</span>
                        </div>
                        <div className="right-inner-chat-container right-chat-container-desktop">
                            <List>
                                <ListItem>
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        KS
                                    </Avatar>
                                    <ListItemText className="chat-item-header-text">
                                        <div className="d-flex">
                                            <Typography>
                                                Kendall Sample
                                            </Typography>
                                            <Typography>
                                                Today, 4.30
                                            </Typography>
                                        </div>
                                        <Typography className="sub-header-text" color="textPrimary">
                                            <strong>Test message on chat</strong>
                                        </Typography>
                                    </ListItemText>

                                </ListItem>
                                <Divider className="chat-divider" />
                                <ListItem>
                                    <Avatar aria-label="Recipe" className="list-avatar lt-red-circle">
                                        JH
                                </Avatar>
                                    <ListItemText className="chat-item-header-text">
                                        <div className="d-flex">
                                            <Typography>
                                                John Hancock
                                            </Typography>
                                            <Typography>
                                                Today, 4.29
                                            </Typography>
                                        </div>
                                        <Typography className="sub-header-text" color="textPrimary">
                                            <strong>Mr Kendall,</strong><br></br>
                                            <strong>Welcome to Closing Document</strong>
                                        </Typography>
                                    </ListItemText>
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

export default withStyles(styles)(Chat)
