import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import Header from 'global/Header'
import Sidebar from "global/Sidebar"

const styles = theme => ({
  root: {
      display: 'flex',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
  },
  content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
  },
  toolbar: {
    minHeight:"55px"
  }
});
class SidebarLayout extends React.Component {
   // ----------------------- Custom logic method END -----------------------------*

   state = {
    left: false,
    open: false,
    addClass: false,
    layoutClass: ''
  };

  //  toggleDrawer = () => () => {
  //   this.setState(prevState => ({
  //     left: !prevState.left
  //   }));

  // }
  handleDrawerOpen = () => {
    this.setState(prevState => ({
      addClass: !prevState.addClass, open: true, layoutClass: 'drawer-responsive'
    }));
  };

  handleDrawerClose = () => {
    this.setState({ open: false, addClass: false, layoutClass: '' });
  };

  render() {
    const {children,classes}=this.props
    const {open}=this.state
    const{left} =this.state
    console.log(' left 00000000000000000000000 ',left)
    let boxClass = ["section-app " + this.state.layoutClass];
    return (
      <div className={boxClass.join(' ')}>
        <Header isOpen={open} toggleDrawerOpen={this.handleDrawerOpen}  toggleDrawerClose={this.handleDrawerClose}/>
        <section id="page-container" className="app-page-container">
          <div className="app-content-wrapper">
          <div className={classes.root + " page-content"}>
                <Sidebar isOpen={open} toggleDrawerClose={this.handleDrawerClose} />
                <main className={classes.content + " main-content main-content-shadow"}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

SidebarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(SidebarLayout)