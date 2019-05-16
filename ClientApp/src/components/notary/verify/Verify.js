import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class Verify extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Congratulations!
                </Typography>
                <Typography component="p" className="mrB15">
                    You have successfully registered with Simply secure<br /> esign portal, please verify your email id that has been sent <br /> in your email id.
                </Typography>
                <Grid container spacing={16} className="mrB10 mrT10">
                    <Grid item xs={12} sm={9}>
                        <span className="fnt-12">Didn't receive the email? <Link style={{ fontWeight: 600, color: "#0073CF", marginLeft: "5px" }} to="/notary/sign-in">Resend email</Link></span>
                    </Grid>
                </Grid>
                <form>
                    <Grid container spacing={16} className="mrT20">
                        <Grid item xs={12} sm={9}>
                            <Button title="SIGN IN" onClick={() => history.push('/notary/sign-in')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                SIGN IN
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default Verify