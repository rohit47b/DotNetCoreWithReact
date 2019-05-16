import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'

import history from 'customHistory'

class SigningRoom extends PureComponent {
    state = {
        checked: true,
      }
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      }
    render() {
        const{checked}=this.state
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
                                <Button title="Back" onClick={() => history.push('/app/eSign-wizard/welcome')} variant="contained" color="primary" className="btn btn-common btn-gray mrR10">
                                    Back
                                </Button>
                                <Button title="Save & Continue" onClick={() => history.push('/app/eSign-wizard/signing-room-details')}  variant="contained" color="primary" className="btn btn-common btn-blue">
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
                                        color="Secondary"
                                        className="pdL0 pdT0 checkbox-primary"
                                    />  
                                    I have read and agree to the eSign disclosure and consent above in its entirely. By checking this box I agree to revive electronic documents.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SigningRoom