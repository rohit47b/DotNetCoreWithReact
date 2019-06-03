import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class ViewerSignIn extends PureComponent {
    state = {
        emailError: false,
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
    }
    
    /** custom validation code end */

    render() {
        const {  email,emailError } = this.state
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Sign In
                </Typography>
                <Typography component="p" className="mrB15">
                    Enter the registration email id and verification PIN that <br/> has been to your email 
                    account.
                </Typography>
                <form>
                    <Grid container spacing={16} className="flex-container">
                        <Grid item xs={12} sm={9}>
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
                    <Grid container spacing={16} className="flex-container">
                        <Grid item sm={9}>
                            <Grid container spacing={8} className="flex-container">
                            <Grid item  xs={12} sm={12}>
                                    <label htmlFor="pin-label" className="custom-label">PIN</label>
                                </Grid>
                                <Grid item xs={3} sm={3}>
                                    <TextField
                                        id="pin-label"
                                        placeholder="0"
                                        margin="normal"
                                        className="bootstrap-text-field no-label"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        name="pin1"
                                        type="text"
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        name="pin2"
                                        type="text"
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        name="pin3"
                                        type="text"
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3}>
                                    <TextField
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        name="pin4"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB30 flex-container">
                        <Grid item sm={9}>
                            <Typography className="fnt-12" component="p">
                                Did't receive the PIN?  <Link style={{ fontWeight: 600,color:"#0073CF" }} to="/resend-pin">Contact us</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10 flex-container">
                        <Grid item xs={12} sm={9}>
                             <Button title="Next" onClick={() => history.push('/viewer/welcome')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                SIGN IN
                            </Button> 
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default ViewerSignIn