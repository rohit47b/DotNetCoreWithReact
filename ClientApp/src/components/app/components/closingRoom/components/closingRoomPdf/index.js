import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import HelpIcon from '@material-ui/icons/Help';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import history from 'customHistory';
import React, { PureComponent } from 'react';

class ClosingRoomPdf extends PureComponent {

    render() {

        return (
            <Card className="card card-room card-pdf">
                <Typography className="card-header" component="div">
                    <span className="card-title">
                        Closing Room
                        <HelpIcon />
                    </span>
                    <Button onClick={() => history.push('/app/notary/closing-room/info')} variant="contained" className="btn btn-gray mrR10">
                        Back
                     </Button>
                    <Button onClick={() => history.push('/app/notary/closing-room/review')} variant="contained" className="btn btn-primary">
                        Save & Continue
                     </Button>
                </Typography>
                <CardContent className="card-body">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <Stepper className="stepper mrB20" alternativeLabel>
                                <Step className="step-item completed">
                                    <StepLabel className="step-label">Signers & Notary Info</StepLabel>
                                </Step>
                                <Step className="step-item un-complete">
                                    <StepLabel className="step-label">Signing Room</StepLabel>
                                </Step>
                                <Step className="step-item step-next">
                                    <StepLabel className="step-label">Review & Submit</StepLabel>
                                </Step>
                            </Stepper>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Paper className="pdf-box" elevation={1}>
                                <Grid container className="mrB10 pdf-top-title bg-gray align-items-center">
                                    <Grid item xs={12} sm={3}>
                                        <Typography className="mr0 heading-small" variant="h5" component="h4">
                                            Kendall Sample
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={9} className="text-right">
                                        <span className="fnt-12 mrR5 note-title">Documents to submits with :</span>
                                        <Button className="btn btn-chip mrR5" variant="outlined" color="default">
                                            <span className="flex-grow-1 text-left ">Sign</span>  <Avatar className="avatar-count mrL5">00</Avatar>
                                        </Button>
                                        <Button className="btn btn-chip" variant="outlined" color="default">
                                            <span className="flex-grow-1 text-left">Interaction</span>  <Avatar className="avatar-count mrL5">01</Avatar>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid container className="pdf-sec">
                                    <Grid item xs={12} sm={3} className="col-left">
                                        <div className="left-panel">
                                            <div className="mrB15">
                                                <Button className="btn btn-rounded btn-rounded-gray mrR5" variant="outlined" color="default">
                                                    Prev
                                                </Button>
                                                <Button className="btn btn-rounded btn-rounded-blue mrR5" variant="outlined" color="default">
                                                    Next <KeyboardArrowRight />
                                                </Button>
                                            </div>
                                            <div className="pdf-doc">
                                                <ul>
                                                    <li>
                                                        <Button title="thumbnail1" className="active" >
                                                            <span className="num-count active">01</span>
                                                            <img alt="thumbnail" src="/assets/images/th1.png" />
                                                            <CheckCircle className="check-icon" />
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button title="thumbnail2" >
                                                            <span className="num-count">02</span>
                                                            <img alt="thumbnail" src="/assets/images/th2.png" />
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button title="thumbnail3" >
                                                            <span className="num-count">03</span>
                                                            <img alt="thumbnail" src="/assets/images/th3.png" />
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button title="thumbnail4" >
                                                            <span className="num-count">04</span>
                                                            <img alt="thumbnail" src="/assets/images/th1.png" />
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button title="thumbnail5" >
                                                            <span className="num-count">05</span>
                                                            <img alt="thumbnail" src="/assets/images/th3.png" />
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} className="col-right right-panel">
                                        <Grid container justify="center">
                                            <Grid item xs={12} sm={8}>
                                                <div className="pdf-img">
                                                    <img alt="Pdf" src="/assets/images/pdf.png" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default ClosingRoomPdf
