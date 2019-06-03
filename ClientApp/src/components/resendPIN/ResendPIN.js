import React, { PureComponent } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class ResendPIN extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
        emailError: false,
        addressError:false,
        address:'',
        email: '',
    }
   
      /** custom validation code  */

   validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
        this.setState({
            emailError: false,
            email: email
        })
    } else {
        this.setState({
            emailError: true
        })
    }
}

handleValidation = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
  
    if (e.target.name === 'email') {
        this.validateEmail(e.target.value);
    }

    if (name === 'address') {
        if (value === '' || value === null) {
            this.setState({
                addressError: true
            })
        } else {
            this.setState({
                addressError: false,
                [name]: value
            })
        }
    }
}

/** custom validation code end */

    render() {
        const { email,emailError,addressError,address } = this.state
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
                                className={emailError ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                name="email"
                                onChange={this.handleValidation}
                                value={email}
                            />
                           {emailError && <div className="validation-error text-right"> Please enter a valid email id </div>}
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB15">
                        <Grid item sm={9}>
                            <TextField
                                label={<span>Property Address <b>*</b></span>}
                                onChange={this.handleValidation}
                                className={addressError ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                placeholder="Enter property address"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                name="address"
                                type="text"
                                value={address}
                            />
                              {addressError && <div className="validation-error text-right"> Please enter property address </div>}
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