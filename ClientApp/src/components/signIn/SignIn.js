import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class SignIn extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Sign in
                </Typography>
                {/* <Typography component="p" className="mrB15">
                    Enter the registered email id and verification PIN that has been send to your email account.
                </Typography> */}
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
                                type="email"
                                name="email"

                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={16}>
                        <Grid item sm={9}>
                            <Grid container spacing={8}>
                                <Grid item  xs={12} sm={12}>
                                    <label htmlFor="pin-label" className="custom-label">PIN</label>
                                </Grid>
                                <Grid item xs={3} sm={3}>
                                    <TextField
                                        id="pin-label"
                                        placeholder="0"
                                        fullWidth
                                        margin="normal"
                                        className="bootstrap-text-field no-label"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type="text"
                                        name="pin1"
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3}>
                                    <TextField
                                       
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="pin2"
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3}>
                                    <TextField
                                      
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="pin3"
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3}>
                                    <TextField
                                        
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        type="text"
                                        name="pin4"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB30">
                        <Grid item xs={12} sm={9}>
                            <Typography className="fnt-12" component="p">
                                <Link style={{ fontWeight: 600, color: "#0073CF" }} to="/resend-pin">Forgot PIN</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Next"  onClick={() => history.push('/app/closing-package-invoice')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                NEXT
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default SignIn