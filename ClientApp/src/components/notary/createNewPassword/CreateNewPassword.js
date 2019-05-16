import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class CreateNewPassword extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
    }

    render() {
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Enter new password
                </Typography>
                <form>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="New Password"
                                placeholder="Enter new password"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="newPassword"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Confirm Password"
                                placeholder="Re-enter new password"
                                fullWidth
                                margin="normal"
                                className="bootstrap-text-field"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="confirmPassword"
                            />
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={16} className="mrT20">
                        <Grid item xs={12} sm={9}>
                            <Button title="Save" onClick={() => history.push('/notary/sign-in')}   variant="contained" color="primary" className="btn btn-primary btn-block">
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default CreateNewPassword