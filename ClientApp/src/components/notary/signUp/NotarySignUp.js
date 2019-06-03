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
        emailError: false,
        passwordError:false,
        nameError:false,
        name:'',
        password:'',
        email: '',
    }

     /** custom validation code  */

     validateEmail(email) {
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

        if (name === 'name') {
            if (value === '' || value === null) {
                this.setState({
                    nameError: true
                })
            } else {
                this.setState({
                    nameError: false,
                    [name]: value
                })
            }
        }
      
        if (e.target.name === 'email') {
            this.validateEmail(e.target.value);
        }
        if (e.target.name === 'password') {
            this.validatePassword(e.target.value);
        }
    
        // if (name === 'password') {
        //     if (value === '' || value === null) {
        //         this.setState({
        //             passwordError: true
        //         })
        //     } else {
        //         this.setState({
        //             passwordError: false,
        //             [name]: value
        //         })
        //     }
        // }
        
    }
    
    /** custom validation code end */

    render() {
        const { name,email,password,nameError,emailError,passwordError } = this.state
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
                                label={<span>Your Name<b>*</b></span>}
                                placeholder="Enter your name"
                                fullWidth
                                margin="normal"
                                onChange={this.handleValidation}
                                className={nameError ? "bootstrap-text-field bootstart-text-error-border" : 'bootstrap-text-field'}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="name"
                                type="text"
                                value={name}

                            />
                            {nameError && <div className="validation-error text-right"> Please enter your name</div>}
                        </Grid>
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


                    <Grid container spacing={16} className="mrT10">
                        <Grid item xs={12} sm={9}>
                            <Button title="Sign Up" onClick={() => history.push('/notary/verify')} variant="contained" color="primary" className="btn btn-primary btn-block">
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrT15P">
                        <Grid item xs={12} sm={9} className="panel-foo-line">
                            <span className="fnt-12">Already Registered ? <Link style={{ fontWeight: 600, color: "#0073CF", marginLeft: "5px" }} to="/notary/sign-in">Log In</Link></span>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}



export default NotarySignUp