import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import Header from 'global/Header'
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
class RemoteSignInLayout extends React.Component {
   // ----------------------- Custom logic method END -----------------------------*

   state = {
    left: false
  };

   toggleDrawer = () => () => {
    this.setState(prevState => ({
      left: !prevState.left
    }));

  }

  render() {
    const {children,classes}=this.props
    return (
      <div className="section-app section-remote-sign">
        <Header toggleDrawerOpen={this.toggleDrawer()} />
        <section id="page-container" className="app-page-container">
          <div className="app-content-wrapper">
          <div className={classes.root + " page-content"}>
                <main className={classes.content + " main-content"}>
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

RemoteSignInLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(RemoteSignInLayout)