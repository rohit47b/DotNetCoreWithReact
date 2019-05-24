import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import HelpOutline from '@material-ui/icons/HelpOutline';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import PermIdentity from '@material-ui/icons/PermIdentity';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

import history from 'customHistory';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import React, { PureComponent } from 'react';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';


const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 48,
    [theme.breakpoints.up('sm')]: {
      width: 48,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  
});

class Sidebar extends PureComponent {
  state = {
    open: true,
    openSubmenu:false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleSubMenuClick= ()=>{
    this.setState(state => ({ openSubmenu: !state.openSubmenu }));
  }

  goTo = (path) => {
    const { toggleDrawerClose } = this.props
    toggleDrawerClose()
    history.push("/app/notary"+path)
  }

  render() {
    const { classes, isOpen,toggleDrawerClose} = this.props;
    const {open,openSubmenu} =this.state
    return (
      <div className="sidebar">
        <CssBaseline />
         
        <Drawer
          className={classNames(classes.drawer + " sidebar-drawer", {
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          })}
          variant="permanent"
          classes={{
            paper: classNames({
              [classes.drawerOpen]: isOpen,
              [classes.drawerClose]: !isOpen,
            }),
          }}
          open={isOpen}
          PaperProps={{
            style: {
              top: '50px'
            }
          }}
          style={{ paddingBottom: '50px' }}
        >

          <Divider />
          <List className="sidebar-menu">

            <ListItem onClick={this.handleClick} button className="menu-item active">
              <ListItemIcon className="menu-icon"><InsertDriveFile /></ListItemIcon>
              <ListItemText className="menu-title" primary={"Closing Room"} />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="submenu-list">
                <ListItem button className="submenu menu-item" 
                // onClick={() => history.push('/app/notary/closing-room')}
                onClick={() => this.goTo('/closing-room')}
                >
                  <ListItemIcon  className="menu-icon">
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText className="menu-title" inset primary="Closing Room1" />
                </ListItem>
                <ListItem onClick={this.handleSubMenuClick} button className="submenu menu-item">
                  <ListItemIcon  className="menu-icon">
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText className="menu-title" inset primary="Closing Room2" />
                </ListItem>
                  <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className="submenu-list-level-2">
                    <ListItem button className="submenu menu-item">
                      <ListItemIcon  className="menu-icon">
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText className="menu-title" inset primary="Closing Room3" onClick={toggleDrawerClose}/>
                    </ListItem>
                    </List>
                  </Collapse>
              </List>
            </Collapse>
            <ListItem 
              // onClick={() => history.push('/app/notary/options')} 
              onClick={() => this.goTo('/options')}
              button className="menu-item">
              <ListItemIcon className="menu-icon"> <Icon>settings</Icon></ListItemIcon>
              <ListItemText className="menu-title" primary={"Options"} />
            </ListItem>
            <ListItem 
              // onClick={() => history.push('/app/notary/profile-settings')} 
              onClick={() => this.goTo('/profile-settings')}
              button className="menu-item">
              <ListItemIcon className="menu-icon"><PermIdentity /></ListItemIcon>
              <ListItemText className="menu-title" primary={"Profile Settings"} />
            </ListItem>
            <ListItem 
              // onClick={() => history.push('/app/notary/closing-room/chat')} 
              onClick={() => this.goTo('/closing-room/chat')}
              button className="menu-item">
              <ListItemIcon className="menu-icon"><ChatBubbleOutline/></ListItemIcon>
              <ListItemText className="menu-title chat-count" >
                <span className="flex-grow-1">Chat</span><span className="circle">2</span>
              </ListItemText>
            </ListItem>
            <ListItem button className="menu-item">
              <ListItemIcon className="menu-icon"><HelpOutline /></ListItemIcon>
              <ListItemText className="menu-title" primary={"Help"} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}


Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidebar);