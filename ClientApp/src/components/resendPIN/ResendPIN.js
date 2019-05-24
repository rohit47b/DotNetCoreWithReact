import React, { PureComponent } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class ResendPIN extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
        errors: {}
    }
    handleValidation = (e) => {
        let  errors ={}
        let name = e.target.name
        if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            errors.email = 'Invalid email address'
        } else {
            delete errors.email
        }
        if (name === 'propertyAddress' && e.target.value.trim().length===0) {
            errors.propertyAddress = 'Property Address is required!'
        }

        this.setState({
            errors
        })
    }

    render() {
        const { errors } = this.state
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Resend PIN
                </Typography>
                <Typography component="p" className="mrB15">
                    Enter your Login Information that will used to validate<br/> in order to resend PIN
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item sm={9}>
                        <TextField
                                id="standard-full-width"
                                label={<span>Email Id <b>*</b></span>}
                                placeholder="Enter email id"
                                fullWidth
                                margin="normal"
                                className={errors.email ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                name="email"
                                onChange={this.handleValidation}
                            />
                            {errors.email && <div className="validation-error text-right"> Please enter a valid email id </div>}
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB15">
                        <Grid item sm={9}>
                            <TextField
                                label="Property Address"
                                onChange={this.handleValidation}
                                className={errors.propertyAddress ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                placeholder="Enter property address"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                name="propertyAddress"
                                type="text"
                            />
                              {errors.propertyAddress && <div className="validation-error text-right"> Please enter property address </div>}
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={16} className="mrB20">
                        <Grid item sm={7}>
                            <div className="captcha-box">
                                <Checkbox
                                    value=""
                                    color="primary"
                                />
                                <span className="captcha-text">I'm not a robot</span>
                                <span><img alt="recaptchaLogo" width="50" src="/assets/images/recaptchaLogo.png"/></span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item sm={9}>
                            <Button title="Submit"  variant="contained" color="primary" className="btn btn-primary btn-block">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default ResendPIN