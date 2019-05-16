import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class NotarySignUp extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Sign Up
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Your Name"
                                placeholder="Enter your name"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="name"
                                type="text"

                            />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Email Id"
                                placeholder="Enter your email id"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="email"
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Password"
                                placeholder="Enter your password"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="password"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    
                  
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Sign Up" onClick={() => history.push('/notary/verify')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT15P">
                        <Grid item xs={12} sm={9} className="panel-foo-line">
                            <span className="fnt-12">Already Registered ? <Link style={{ fontWeight: 600, color: "#0073CF",marginLeft:"5px" }} to="/notary/sign-in">Log In</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default NotarySignUp