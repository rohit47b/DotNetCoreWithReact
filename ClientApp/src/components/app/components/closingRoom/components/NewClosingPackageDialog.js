import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import HighlightOff from '@material-ui/icons/HighlightOff'
import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography'
import FolderIcon from '@material-ui/icons/FolderOpen'
import LocationIcon from '@material-ui/icons/LocationOn'
import PersonIcon from '@material-ui/icons/PersonOutline'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import history from 'customHistory'

class NewClosingPackageDialog extends PureComponent {

    render() {
        const { isOpen, handleCloseDialog } = this.props
        return (

            <Dialog
                open={isOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="dialog-add dialog-closing"
                fullWidth={true}
            >
                <DialogTitle className="dialog-title" id="alert-dialog-title">
                    <span>New Closing Package</span>
                    <HighlightOff onClick={handleCloseDialog} />
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <Typography className="mrB20 heading-small" variant="h5" component="h4">
                        Package Details
                    </Typography>
                    <Grid container spacing={16} className="mrB10">
                        <Grid item xs={12} sm={12}>
                            <div className="package-details d-flex align-items-center text-wrap">
                                <div className="media">
                                    <span className="icon-circle"><PersonIcon /></span>
                                    <div className="media-content">
                                        <div className="text-small">Title</div>
                                        <div className="text-large font-bold">73-2019041201</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <span className="icon-circle"><LocationIcon /></span>
                                    <div className="media-content">
                                        <div className="text-small">Lender</div>
                                        <div className="text-large font-bold">ABC Mortgage</div>
                                    </div>
                                </div>

                                <div className="media">
                                    <span className="icon-circle"><FolderIcon /></span>
                                    <div className="media-content">
                                        <div className="text-small">Property Address</div>
                                        <div className="text-large font-bold">123 AB Road,Vernon,TX-76384</div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB10">
                        <Grid item xs={12} sm={12}>
                            <Typography className="mrB20 border-bottom-red pdB20 heading-small" variant="h5" component="h4">
                                Schedule Closing
                            </Typography>
                            <div className="schedule-section package-details">
                                <div className="media">
                                    <Avatar alt="avatar" src="/assets/images/avatar.jpg" className="schedule-object" />
                                    <div className="media-content">
                                        <div className="text-small">Notary</div>
                                        <div className="text-large font-bold">Mr. John Smith</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <span className="icon-circle"><LocationIcon /></span>
                                    <div className="media-content">
                                        <div className="text-small">Signer</div>
                                        <div className="text-large font-bold">Kendall Sample</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-content">
                                        <div className="text-small">Date</div>
                                        <div className="text-large font-bold">25 March 2019</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-content">
                                        <div className="text-small">Time</div>
                                        <div className="text-large font-bold">12:15 PM</div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB10">
                        <Grid item xs={12} sm={12}>
                            <Typography className="mrB20 heading-small" variant="h5" component="h4">
                                Documents <span className="font-normal">(05)</span>
                            </Typography>
                            <Paper className="paper-header d-flex align-items-center" elevation={1}>
                                <span className="grid-80 font-600">
                                    Documents className
                                </span>
                                <span className="grid-20 text-center font-600">Pages</span>
                            </Paper>
                            <Paper className="paper-box mrB10" elevation={1}>
                                <span className="grid-80 fnt-12">
                                    Borrower's certification and authorization
                                </span>
                                <span className="grid-20 text-center">1</span>
                            </Paper>
                            <Paper className="paper-box mrB10" elevation={1}>
                                <span className=" fnt-12 grid-80">
                                    Home equity line of credit agreement and disclosure statement
                                </span>
                                <span className="grid-20 text-center">7</span>
                            </Paper>
                            <Paper className="paper-box mrB10" elevation={1}>
                                <span className="fnt-12 grid-80">
                                    Free & Charges
                                </span>
                                <span className="grid-20 text-center">15</span>
                            </Paper>
                            <Paper className="paper-box mrB10" elevation={1}>
                                <span className="fnt-12 grid-80">
                                    Mortgage
                                </span>
                                <span className="grid-20 text-center">2</span>
                            </Paper>
                            <Paper className="paper-box mrB10" elevation={1}>
                                <span className="fnt-12 grid-80">
                                    Transfer of rights in the property
                                </span>
                                <span className="grid-20 text-center">1</span>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16}>
                        <Grid item xs={8} sm={6}>
                            <Button title="View Document" variant="contained" className="btn btn-dark-gray btn-sm mrR10">
                                View Document
                            </Button>
                            <Button title="Edit" variant="contained" className="btn btn-dark-gray btn-sm ">
                                Edit
                            </Button>
                        </Grid>
                        <Grid item xs={4} sm={6} className="text-right">
                            <Button title="eSign" onClick={() => history.push('/app/notary/closing-room/welcome')} variant="contained" className="btn btn-primary btn-sm text-transform-none min-width-100">
                                eSign
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        )
    }
}

export default NewClosingPackageDialog