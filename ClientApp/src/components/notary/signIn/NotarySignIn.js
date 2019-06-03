import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import history from 'customHistory'

import {cloneDeep} from 'lodash'

class NotarySignIn extends PureComponent {
    state = {
        emailId: 'jstreit@wwnotary.com',
        emailError: false,
        passwordError:false,
        password:'',
        email: '',
    }

    /** custom validation code  */

    validateEmail =(email)=> {
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

    validatePassword =(password) =>{
        const pattern =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/
        const result = pattern.test(password);
        if (result === true) {
            this.setState({
                passwordError: false,
                password: password
            })
        } else {
            this.setState({
                passwordError: true
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
    
        if (e.target.name === 'password') {
            this.validatePassword(e.target.value);
        }
    }
    
    /** custom validation code end */

    render() {
        const { email,emailError,passwordError,password } = this.state
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
                                label={<span>Email Id<b>*</b></span>}
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
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="standard-full-width"
                                label={<span>Password<b>*</b></span>}
                                placeholder="Enter Password"
                                fullWidth
                                margin="normal"
                                className={passwordError ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="password"
                                name="password"
                                onChange={this.handleValidation}
                                value={password}
                            />
                            {passwordError && <div className="validation-error text-right"> Please enter the password </div>}
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
                            <Button title="Submit" onClick={() => history.push('/app/notary/closing-room')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT15P">
                        <Grid item xs={12} sm={9} className="panel-foo-line">
                            <span className="fnt-12">Not registered yet? <Link style={{ fontWeight: 600, color: "#0073CF", marginLeft: "5px" }} to="/notary/sign-in">Contact Us</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default NotarySignIn