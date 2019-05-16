import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'
import '../../style/app.scss';

class EmailVerify extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        const { emailId } = this.state
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Enter Verification PIN
                </Typography>
                <Typography component="p" className="mrB15">
                    Enter the verification PIN that has been sent to your <br />
                    email account.
                </Typography>
                <form>
                    <Grid container spacing={16} className="flex-container">
                        <Grid item xs={12} sm={9}>
                            <TextField
                                label="Email Id"
                                className="bootstrap-text-field"
                                value={emailId}
                                //onChange={this.handleChange('name')}
                                margin="normal"
                                name="email"
                                type="email"
                            />
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
                                Did't receive the PIN? <Link style={{ fontWeight: 600,color:"#0073CF" }} to="/resend-pin">Resend PIN</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT10 flex-container">
                        <Grid item xs={12} sm={9}>
                             <Button title="Next" onClick={() => history.push('/create-new-pin')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                NEXT
                            </Button> 
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default EmailVerify