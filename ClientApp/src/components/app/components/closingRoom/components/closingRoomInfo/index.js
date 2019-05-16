import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import React, { PureComponent } from 'react';
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import history from 'customHistory';

import DeclineConsentDialogbox from "./DeclineConsentDialogbox"

class ClosingRoomInfo extends PureComponent {
    state = {
        checked: true,
        open: false
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }

    render() {
        const { checked, open } = this.state
        return (
            <Card className="card card-room">
                <Typography className="card-header" component="div">
                    <span className="card-title">
                        Closing Room
                        <HelpIcon />
                    </span>
                    <Button title="Back" onClick={() => history.push('/app/notary/closing-room/welcome')} variant="contained" className="btn btn-gray mrR10">
                        Back
                     </Button>
                    <Button title="Save & Continue" onClick={() => history.push('/app/notary/closing-room/pdf')} variant="contained" className="btn btn-primary">
                        Save & Continue
                     </Button>
                </Typography>
                <CardContent className="card-body">
                    <Grid container spacing={16}>
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
                    <Grid container spacing={16}>
                        <Grid item sm={12}>
                            <Typography className="heading-small mrB15" gutterBottom>
                                Kendall Sample!
                             </Typography>
                            <Typography className="mrB20 fnt-13" component="p">
                                Please review the eSign Disclosure and consent below carefully and check the box below if you wish to consent to receive and sign electronic documents.
                                </Typography>
                            <Typography className="mrB20 heading-small" variant="h5" component="h4">
                                Customer consent to Electronic Records Agreement
                                </Typography>
                            <Typography className="mrB20 fnt-13" component="p">
                                You the (customer) have the right to either Accept the terms of this agreement and grant your Consent to Electronic Record or you may Deny this agreement and withdraw your Consent to Electronic Records and deny any further action.
                                </Typography>
                            <Typography className="mrB20 fnt-13" component="p">
                                By accepting and granting your consent you have agreed be legally bound by these terms and conditions, including those terms and conditions incorporated by reference. Please read these terms carefully.
                                </Typography>
                            <Typography className="mrB20 fnt-13" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum eros ipsum, id consectetur nulla sollicitudin eu. Morbi hendrerit, dui id gravida finibus, mauris quam eleifend mauris, quis sollicitudin ante mi at augue. Proin tempus est eu ligula commodo tristique. Cras dapibus in mi at euismod. Suspendisse eget magna quis augue placerat laoreet sed quis massa. Phasellus consequat lectus non ante blandit tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum eros ipsum, id consectetur nulla sollicitudin eu. Morbi hendrerit, dui id gravida finibus, mauris quam eleifend mauris, quis sollicitudin ante mi at augue. Proin tempus est eu ligula commodo tristique. Cras dapibus in mi at euismod. Suspendisse eget magna quis augue placerat laoreet sed quis massa. Phasellus consequat lectus non ante blandit tristique.
                                </Typography>
                            <Typography className="mrB20 fnt-13 d-inline-flex align-item-start" component="p">
                                <Checkbox
                                    checked={checked}
                                    onChange={this.handleChange('checked')}
                                    value="checked"
                                    color="primary"
                                    className="pdL0 pdT0 checkbox-primary"
                                />
                                I have read and agree to the eSign disclosure and consent above in its entirely. By checking this box I agree to revive electronic documents.
                                </Typography>
                            <Typography component="div">
                                <Button title="Cancel by decline consent" onClick={this.handleDialogOpen} variant="contained" className="btn btn-dark-gray btn-sm ">
                                    Cancel by decline consent
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <DeclineConsentDialogbox isOpen={open} handleCloseDialog={this.handleCloseDialog} />
            </Card>
        )
    }
}

export default ClosingRoomInfo
