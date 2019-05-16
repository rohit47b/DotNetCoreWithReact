import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React, { PureComponent } from 'react';
import RightSideBar from './RightSideBar';

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    [theme.breakpoints.down('sm')]: {
        signClosingWizard: {
            padding: '0 20px 0 20px',
        },
        heading: {
            marginBottom: '20%',
        }
    },
    pdR4: {
        paddingRight: '4px !important'
    }
});

class SigningRoom extends PureComponent {

    render() {

        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={9} className={classes.signClosingWizard + " pdB0 wizard-container"}>
                    <Paper className="wizard-header-text">
                        <Typography variant="h5" component="h3">
                            eSign wizard / Signing Room
                        </Typography>
                        <Typography component="p">
                            <strong>Signer 1: John Smith</strong>
                        </Typography>
                    </Paper>
                    <Card>
                        <CardContent className="card-content pdB0 pdT0">
                            <Paper className="pdf-box pdf-box-padding remove-shadow pdB0" elevation={1}>
                                <Grid container className="mrB10 bg-gray pdR20 pdL20 align-items-center">
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Typography className="mr0 heading-small" variant="h5" component="h4">
                                            Kendall Sample
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={9} className="text-right document-header-mobile">
                                        <span className="fnt-12 mrR5">Documents to submits with :</span>
                                        <Button className={classes.pdR4 + " btn btn-chip mrR5"} variant="outlined" color="default">
                                            <span className="flex-grow-1 text-left ">Sign</span>  <Avatar className="avatar-count mrL5">00</Avatar>
                                        </Button>
                                        <Button className={classes.pdR4 + " btn btn-chip"} variant="outlined" color="default">
                                            <span className="flex-grow-1 text-left">Interaction</span>  <Avatar className="avatar-count mrL5">01</Avatar>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid container className="pdf-sec">
                                    <Grid item xs={12} sm={12} md={3}>
                                        <div className="left-panel left-remote-sign">
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
                                                        <Button title="thumbnail4">
                                                            <span className="num-count">04</span>
                                                            <img alt="thumbnail" src="/assets/images/th1.png" />
                                                        </Button>
                                                    </li>
                                                    <li>
                                                        <Button title="thumbnail5">
                                                            <span className="num-count">05</span>
                                                            <img alt="thumbnail" src="/assets/images/th3.png" />
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={9} className="right-panel">
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
                <Grid item xs={12} sm={12} md={5} lg={4} xl={3} className="pdB0">
                    <RightSideBar isStart={false} />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SigningRoom)
