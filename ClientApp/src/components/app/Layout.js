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
class Layout extends React.Component {
   // ----------------------- Custom logic method END -----------------------------*

  render() {
    const {children,classes}=this.props
    return (
      <div className="section-app section-main">
        <Header />
        <div className={classes.toolbar} />
        <section id="page-container" className="app-page-container">
          <div className="app-content-wrapper">
            {children}
            {/* {isProgress && <Loader />} */}
          </div>
        </section>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Layout)