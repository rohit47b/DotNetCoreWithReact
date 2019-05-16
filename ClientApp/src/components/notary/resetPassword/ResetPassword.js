import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import history from 'customHistory'


class ResetPassword extends PureComponent {

    render() {
        
        return (
            <Grid item xs={12} sm={12} md={6} className="verify-form">
                <Typography className="mrB20 heading-large" gutterBottom variant="h5" component="h2">
                    Reset Password
                </Typography>
                <Typography component="p" className="mrB15">
                    Enter the verification PIN that has been sent to your email account.
                </Typography>
                <form>
                   
                <Grid container spacing={16}>
                        <Grid item sm={9}>
                            <Grid container spacing={8}>
                                <Grid item  xs={12} sm={12}>
                                    <label htmlFor="product-code-label" className="custom-label">Product Code</label>
                                </Grid>
                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                       id="product-code-label"
                                        placeholder="0"
                                        fullWidth
                                        margin="normal"
                                        className="bootstrap-text-field no-label"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        name="code1"
                                        type="text"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        name="code2"
                                        type="text"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        name="code3"
                                        type="text"
                                    />
                                </Grid>

                                <Grid item  xs={3} sm={3}>
                                    <TextField
                                        label=""
                                        className="bootstrap-text-field no-label"
                                        placeholder="0"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        name="code4"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB30">
                        <Grid item xs={12} sm={9}>
                            <span className="fnt-12">Didn't get the PIN? <Link style={{ fontWeight: 600, color: "#0073CF",marginLeft:"5px" }} to="/notary/reset-password">Resend again</Link></span>
                        </Grid>
                    </Grid>
                    
                  
                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Submit"  onClick={() => history.push('/notary/new-password')}  variant="contained" color="primary" className="btn btn-primary btn-block">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default ResetPassword