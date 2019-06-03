
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


import history from 'customHistory'

const ConfirmDialogBox = (props) => {
    const { isOpen, handleDialogClose, heading, content,url } = props
    return (<Dialog
        open={isOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="confirm-dialog"
    >
        <DialogTitle className="dialog-head" id="alert-dialog-title">
            <Typography variant="h5" component="h4">
                {heading}
            </Typography>
        </DialogTitle>
        <DialogContent className="dialog-content">
            <DialogContentText id="alert-dialog-description">
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions className="dailog-footer">
            <Button onClick={() => history.push(url)} className="btn btn-common btn-red">
                Ok
            </Button>
            <Button onClick={handleDialogClose} className="btn btn-common btn-gray">
                Cancel
            </Button>
        </DialogActions>
    </Dialog>)
}

export default ConfirmDialogBox;