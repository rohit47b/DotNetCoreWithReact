import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class NotarySignIn extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Sign in
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Email Id"
                                placeholder="Enter email id"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="text"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Password"
                                placeholder="Enter Password"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="password"
                            />
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={16} className="mrB30">
                        <Grid item xs={12} sm={9}>
                            <Typography className="fnt-12" component="p">
                                <Link style={{ fontWeight: 600, color: "#0073CF" }} to="/notary/reset-password">Forgot Password ?</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Submit" onClick={() => history.push('/app/notary/closing-room')}  variant="contained" color="primary" className="btn btn-primary btn-block">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT15P">
                        <Grid item xs={12} sm={9} className="panel-foo-line">
                            <span className="fnt-12">Not registered yet? <Link style={{ fontWeight: 600, color: "#0073CF",marginLeft:"5px" }} to="/notary/sign-in">Contact Us</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default NotarySignIn