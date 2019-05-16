import React, { PureComponent } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import DocumentPdf from "global/DocumentPdf"

import history from 'customHistory'

class ClosingPackageInvoice extends PureComponent {
    state = {
      
        openDialog:false
      }

      handleDialogPdfOpen = () => {
        this.setState({ openDialog: true })
      }
    
      handleDialogPdfClose = () => {
        this.setState({ openDialog: false })
      }

    render() {
        const{openDialog} = this.state
        return (
            <div>
                <Grid container justify="center" className="top-gray-bg">
                    <Grid item xs={12} sm={12} lg={8}>
                        <Grid container>
                            <Grid item sm={12} className="d-flex align-item-end">
                                <Typography className="heading-large" gutterBottom variant="h5" component="h3">
                                    Closing Package Information
                               </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" className="card-container">
                    <Grid item xs={12} sm={8}>
                        <Card className="card-white mrB20">
                            <CardContent className="card-content">
                                <Grid container>
                                    <Grid item xs={6} sm={6}>
                                        <Typography className="mrB20 heading-small" variant="h5" component="h4">
                                            Package Details
                                         </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} className="text-right">
                                        <Button title="create signed"  onClick={() => history.push('/app/eSign-wizard/welcome')} className="btn btn-icon btn-blue-bg" ariant="contained">
                                            <Icon className="mrR5">create</Icon> signed
                                        </Button>
                                    </Grid>
                                </Grid>

                                <div className="package-details">
                                    <div className="media">
                                        <Icon className="icon-circle">person_outline</Icon>
                                        <div className="media-content">
                                            <div className="text-small">Lender Name</div>
                                            <div className="text-large font-bold">ABC Mortgage</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <Icon className="icon-circle">location_on</Icon>
                                        <div className="media-content">
                                            <div className="text-small">Property Address</div>
                                            <div className="text-large font-bold">123 AB Road, Vernon, TX-76384</div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <Icon className="icon-circle">folder_open</Icon>
                                        <div className="media-content">
                                            <div className="text-small">Package ID</div>
                                            <div className="text-large font-bold">53408 / 7-2019031502</div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="line-divider" />
                                <Grid container spacing={40}>
                                    <Grid item md={7}>
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
                                    <Grid item md={5} className="right-content">
                                        <Typography className="mrB20 heading-small" variant="h5" component="h4">
                                            Signer Information
                                        </Typography>
                                        <div className="signer-info">
                                            <div className="signer-details">
                                                <span className="title">Name</span>
                                                <span>: Kendall Sample Smith</span>
                                            </div>
                                            <div className="signer-details">
                                                <span className="title">Company</span>
                                                <span>: 47Billion Technologies</span>
                                            </div>
                                            <div className="signer-details">
                                                <span className="title">Email</span>
                                                <span>: rajeev@47billion.com</span>
                                            </div>
                                            <div className="signer-details">
                                                <span className="title">Notification Type</span>
                                                <span>: Email</span>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card className="card-white">
                            <CardContent className="card-content">
                                <Grid container spacing={16}>
                                    <Grid item xs={6} sm={6}>
                                        <Typography className="heading-small" variant="h5" component="h4">
                                            Documents List <span className="font-normal">(05)</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} className="text-right">
                                        <span className="link fnt-12 font-600">Download all</span>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={16}>
                                    <Grid item sm={12}>
                                        <Paper className="paper-box mrB10" elevation={1}>
                                            <span  onClick={this.handleDialogPdfOpen} className="link fnt-12 flex-grow-1">
                                                Borrower's certification and authorization
                                            </span>
                                            <span className="fnt-aws-icon"><i className='fa fa-file-pdf-o'></i></span>
                                        </Paper>
                                        <Paper className="paper-box mrB10" elevation={1}>
                                            <span  onClick={this.handleDialogPdfOpen} className="link fnt-12 flex-grow-1">
                                                Home equity line of credit agreement and disclosure statement
                                            </span>
                                            <span className="fnt-aws-icon"><i className='fa fa-file-pdf-o'></i></span>
                                        </Paper>
                                        <Paper className="paper-box mrB10" elevation={1}>
                                            <span  onClick={this.handleDialogPdfOpen} className="link fnt-12 flex-grow-1">
                                                Free & Charges
                                            </span>
                                            <span className="fnt-aws-icon"><i className='fa fa-file-pdf-o'></i></span>
                                        </Paper>
                                        <Paper className="paper-box mrB10" elevation={1}>
                                            <span  onClick={this.handleDialogPdfOpen} className="link fnt-12 flex-grow-1">
                                                Mortgage
                                            </span>
                                            <span className="fnt-aws-icon"><i className='fa fa-file-pdf-o'></i></span>
                                        </Paper>
                                        <Paper className="paper-box mrB10" elevation={1}>
                                            <span  onClick={this.handleDialogPdfOpen} className="link fnt-12 flex-grow-1">
                                                Transfer of rights in the property
                                            </span>
                                            <span className="fnt-aws-icon"><i className='fa fa-file-pdf-o'></i></span>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <DocumentPdf isOpen={openDialog} handleDialogPdfClose={this.handleDialogPdfClose}/>
            </div>
        )
    }
}

export default ClosingPackageInvoice