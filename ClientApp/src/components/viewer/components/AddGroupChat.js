import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const styles = theme => ({
    addGroup: {
        minHeight: "320px",
        position: "relative",
    },
    cancelIcon: {
        display: "block",
        marginLeft: "auto",
        marginRight: "14px",
        marginTop: "10px",
        color: "#9e9d9d",
        fontSize: "20px",
    }
});


class AddGroupChat extends PureComponent {
    render() {
        const { classes,isClose} = this.props;
        return (
            <div className={classes.addGroup}>
                <CancelIcon className={classes.cancelIcon} onClick={isClose} />
                <div className="bottom-text">
                    <Typography component="p">
                        Start one to one chat by entering person's name with @ sign below.
                    </Typography>
                    <Typography component="h5">
                        Example: @john type your message
                    </Typography>
                </div>
            </div>
        )
    }
}

AddGroupChat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddGroupChat)
