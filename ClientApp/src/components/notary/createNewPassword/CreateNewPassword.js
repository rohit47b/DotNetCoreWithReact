import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'


class CreateNewPassword extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
        errors: {}
    }

    handleValidation = (e) => {
        let errors = {}
        let name = e.target.name
        if (
            name === 'newPassword' &&
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
        ) {
            errors.newPassword = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
        } else {
            delete errors.password
        }
        if (
            name === 'confirmPassword' &&
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
        ) {
            errors.confirmPassword = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
        } else {
            delete errors.password
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
                                onChange={this.handleValidation}
                                className={errors.newPassword ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="newPassword"
                            />
                            {errors.newPassword && <div className="validation-error text-right"> Please enter your name</div>}
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label="Confirm Password"
                                placeholder="Re-enter new password"
                                fullWidth
                                margin="normal"
                                onChange={this.handleValidation}
                                className={errors.confirmPassword ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="confirmPassword"
                            />
                            {errors.confirmPassword && <div className="validation-error text-right"> Please enter your name</div>}
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