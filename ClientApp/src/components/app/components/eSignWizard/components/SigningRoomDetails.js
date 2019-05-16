import React, { PureComponent } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Paper from '@material-ui/core/Paper'

import history from 'customHistory'

class SigningRoomDetails extends PureComponent {
    state = {
        checked: true,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }
    render() {
        return (
            <div>
                <Grid container justify="center" className="top-gray-bg">
                    <Grid item xs={12} sm={12} lg={8}>
                        <Grid container>
                            <Grid item xs={6} sm={6} className="d-flex align-item-end">
                                <Typography className="heading-large" gutterBottom variant="h5" component="h3">
                                    eSign wizard / <span className="font-normal">Signing Room</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} className="text-right">
                                <Button onClick={() => history.push('/app/eSign-wizard/signing-room')} variant="contained" color="primary" className="btn btn-common btn-gray mrR10">
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" className="btn btn-common btn-gray">
                                    Save & Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" className="card-container">
                    <Grid item xs={12} sm={8}>
                        <Card className="card-white mrB20">
                            <CardContent className="card-content">
                                <Stepper className="stepper mrB20" alternativeLabel>
                                    <Step className="step-item completed">
                                        <StepLabel className="step-label">Welcome</StepLabel>
                                    </Step>
                                    <Step className="step-item un-complete">
                                        <StepLabel className="step-label">Signing Room</StepLabel>
                                    </Step>
                                    <Step className="step-item step-next">
                                        <StepLabel className="step-label">Review & Submit</StepLabel>
                                    </Step>
                                </Stepper>
                                <Paper className="pdf-box" elevation={1}>
                                    <Grid container className="mrB10 bg-gray align-items-center">
                                        <Grid item xs={12} sm={12} md={3}>
                                            <Typography className="mr0 heading-small" variant="h5" component="h4">
                                                Kendall Sample
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={9} className="text-right">
                                            <span className="fnt-12 mrR5">Documents to submits with :</span>
                                            <Button className="btn btn-chip mrR5" variant="outlined" color="default">
                                                <span className="flex-grow-1 text-left ">Sign</span>  <Avatar className="avatar-count mrL5">00</Avatar>
                                            </Button>
                                            <Button className="btn btn-chip" variant="outlined" color="default">
                                                <span className="flex-grow-1 text-left">Interaction</span>  <Avatar className="avatar-count mrL5">01</Avatar>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container className="pdf-sec">
                                        <Grid item xs={12} sm={12} md={3}>
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
                                                            <Button title="thumbnail1" className="active">
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
                                                            <Button title="thumbnail3">
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
                                        <Grid item xs={12} md={9} className="right-panel">
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
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SigningRoomDetails