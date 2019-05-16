import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class SignUpProductCode extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Sign Up
                </Typography>
                <Typography component="p" className="mrB15">
                     Thank you for choosing Simply Secure eSign,<br/> please enter your product code to proceed with registration
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Product Code"
                                placeholder="0000-0000-0000-0000-0000-0000"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                name="code"
                            />
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={16} className="mrB30">
                        <Grid item xs={12} sm={9}>
                            <span className="fnt-12">Not working? <Link style={{ fontWeight: 600, color: "#0073CF",marginLeft:"5px" }} to="/notary/registration">Contact Us</Link></span>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Submit" variant="contained" color="primary" className="btn btn-primary btn-block">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT15P">
                        <Grid item xs={12} sm={9} className="panel-foo-line">
                            <span className="fnt-12">Already Registered? <Link style={{ fontWeight: 600, color: "#0073CF",marginLeft:"5px" }} to="/notary/sign-in">Log In</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default SignUpProductCode