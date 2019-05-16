import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';
import BookIcon from '@material-ui/icons/Book';

import history from 'customHistory';
import React, { PureComponent } from 'react';
import NotaryInfoTab from "./NotaryInfoTab";
import SignerInfoTab from "./SignerInfoTab";



class Welcome extends PureComponent {
    state = {
        value: 0,
    }

    handleSwitchChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }
    render() {
        const { value } = this.state
        return (
            <Card className="card card-room">
                <Typography className="card-header" component="div">
                    <span className="card-title">
                        Closing Room
                        <HelpIcon />
                    </span>
                    <Button title="Cancel" variant="contained" className="btn btn-gray mrR10">
                        Cancel
                     </Button>
                    <Button title="Save & Continue" onClick={() => history.push('/app/notary/closing-room/info')} variant="contained" className="btn btn-primary">
                        Save & Continue
                     </Button>
                </Typography>
                <CardContent className="card-body">
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Stepper className="stepper mrB20" alternativeLabel>
                                <Step className="step-item un-complete">
                                    <StepLabel className="step-label">Signers & Notary Info</StepLabel>
                                </Step>
                                <Step className="step-item step-next">
                                    <StepLabel className="step-label">Signing Room</StepLabel>
                                </Step>
                                <Step className="step-item step-next">
                                    <StepLabel className="step-label">Review & Submit</StepLabel>
                                </Step>
                            </Stepper>
                        </Grid>
                    </Grid>
                    <Typography className="heading-small mrB15" gutterBottom>
                        Welcome to Closing Room Wizard
                    </Typography>
                    <Typography className="card-info mrB20" component="div">
                        The wizard will guide you through the process of notarizing closing documents. The closing Room Wizard will walk the Notary and signer through the process of signing and notarization the closing documents as well as gathering the way the signer is identified to be entered into the notaries electronic journal.
                    </Typography>
                    <Grid container spacing={16}>
                        <Grid item sm={12}>
                            <Tabs className="tab-nav-2" value={value} onChange={this.handleTabChange}>
                                <Tab className="tab-nav-item-2" label={<span><PersonIcon /> Kendall Sample</span>} />
                                <Tab className="tab-nav-item-2" label={<span><BookIcon /> John Hancock</span>} />
                            </Tabs>
                            {value === 0 && <SignerInfoTab />}
                            {value === 1 && <NotaryInfoTab />}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default Welcome
