import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'
import HighlightOff from '@material-ui/icons/HighlightOff'
import Typography from '@material-ui/core/Typography';

class DeclineConsentDialogbox extends PureComponent {


    render() {
        const { isOpen, handleCloseDialog } = this.props
        return (

            <Dialog
                open={isOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="dialog-add"
                fullWidth={true}
            >
                <DialogTitle className="dialog-title" id="alert-dialog-title">
                    <span>Decline Consent</span>
                    <HighlightOff onClick={handleCloseDialog} />
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <form>
                        <Grid container spacing={16} className="mrB15p">
                            <Grid item xs={12} sm={12}>
                                <Typography className="mrB20 fnt-14" component="p">
                                    Are you sure want to decline your consent?
                                </Typography>
                                <Typography className="mrB20 fnt-12" component="p">
                                    If you decline your consent,you must print out the documents and sign <br/>
                                    them by traditional paper.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={12}>
                                <Button title="Yes" variant="contained" className="btn btn-dark-gray btn-sm btn-sm mrR10">
                                    Yes
                                </Button>
                                <Button title="No" onClick={handleCloseDialog} variant="contained" className="btn btn-dark-gray btn-sm ">
                                    No
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
}

export default DeclineConsentDialogbox