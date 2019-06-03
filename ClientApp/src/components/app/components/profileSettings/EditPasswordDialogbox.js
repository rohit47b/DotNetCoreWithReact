import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import HighlightOff from '@material-ui/icons/HighlightOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import React, { PureComponent } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'

class EditPasswordDialogbox extends PureComponent {
    state = {
        name: 'hai',
        labelWidth: 0,
        value: 0,
        showPassword: false,
        passwordQuestionError:false,
        passwordError:'',
        currentPasswordError:false,
        newPasswordError:false,
        confirmPasswordError:false,
        passwordQuestions: '',
        password:'',
        currentPassword:'',
        newPassword:'',
        confirmPassword:''

       
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    }

    validatePassword =(password) =>{
        const pattern =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/
        const result1 = pattern.test(password);
        if (result1 === true) {
            this.setState({
                passwordError: false,
                password: password,
               
            })
        } else {
            this.setState({
                passwordError: true,
            })
        }

    }

    validateCurrentPassword =(currentPassword) =>{
        const pattern =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/
        const result = pattern.test(currentPassword);

        if (result === true) {
            this.setState({
                currentPasswordError:false,
                currentPassword:currentPassword
            })
        } else {
            this.setState({
                currentPasswordError: true
            })
        }
    }

    validateNewPassword =(newPassword) =>{
        const pattern =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/
        const result = pattern.test(newPassword);
        
        if (result === true) {
            this.setState({
                newPasswordError:false,
                newPassword:newPassword
            })
        } else {
            this.setState({
                newPasswordError: true
            })
        }
    }

    validateConfirmPassword =(confirmPassword) =>{
        const pattern =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/
        const result = pattern.test(confirmPassword);

        if (result === true) {
            this.setState({
                confirmPasswordError:false,
                confirmPassword:confirmPassword
            })
        } else {
            this.setState({
                confirmPasswordError: true
            })
        }
    }


       /** custom validation code  */

    handleValidation = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

        if (name === 'passwordQuestions') {
            if (value === '' || value === null) {
                this.setState({
                    passwordQuestionError: true
                })
            } else {
                this.setState({
                    passwordQuestionError: false,
                    [name]: value
                })
            }
        }
    
        if (e.target.name === 'password') {
            this.validatePassword(e.target.value);
        }
        
        if (e.target.name === 'currentPassword') {
            this.validateCurrentPassword(e.target.value);
        }
        if (e.target.name === 'newPassword') {
            this.validateNewPassword(e.target.value);
        }
        if (e.target.name === 'confirmPassword') {
            this.validateConfirmPassword(e.target.value);
        }
    }
    
    /** custom validation code end */

    // handleValidation = (e) => {
    //     let errors = {}
    //     let name = e.target.name
       

    //     if (name === 'questions') {
    //         this.setState({ [e.target.name]: e.target.value });
    //     }
    //     if (name === 'questions' && e.target.value === "") {
    //         errors.questions = 'Password questions is required!'
    //     }
    //     if (
    //         name === 'password' &&
    //         !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
    //     ) {
    //         errors.password = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
    //     }

    //     if (
    //         name === 'currentPassword' &&
    //         !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
    //     ) {
    //         errors.currentPassword = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
    //     }

    //     if (
    //         name === 'newPassword' &&
    //         !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
    //     ) {
    //         errors.newPassword = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
    //     }
    //     if (
    //         name === 'confirmPassword' &&
    //         !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$&+,:;=?@#|'"`<>.^*()%!-~/])[A-Za-z\d$&+,:;=?@#|'"`<>.^*()%!-~/]{8,}$/i.test(e.target.value)
    //     ) {
    //         errors.confirmPassword = 'Password is not strong (Minimum eight characters, at least one letter, one number and one special character.)'
    //     }
        
    //     this.setState({
    //         errors
    //     })
    // }


    render() {
        const { isOpen, handleCloseDialog } = this.props
        const {passwordQuestions,password,currentPassword,newPassword,confirmPassword,passwordQuestionError,passwordError,currentPasswordError,newPasswordError,confirmPasswordError } = this.state
        return (

            <Dialog
                open={isOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="dialog-add"
                fullWidth={true}
            >
                <DialogTitle className="dialog-title" id="alert-dialog-title">
                    <span>Edit Password</span>
                    <HighlightOff onClick={handleCloseDialog} />
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <form>
                        <Grid container spacing={16} className="mrB30">
                            <Grid item xs={12} sm={12}>
                                <label className="custom-label mrB10">Security Questions</label>
                                <FormControl variant="filled"  className={passwordQuestionError ? "select-control select-error-border" : "select-control"}>
                                    <InputLabel htmlFor="filled-questions-simple">Password Questions <b>*</b></InputLabel>
                                    <Select
                                        value={passwordQuestions}
                                        onChange={this.handleValidation}
                                        input={<FilledInput name="questions" id="filled-questions-simple" />}
                                        className="select-box"
                                        name="passwordQuestions"
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>What is your city of birth?</MenuItem>
                                        <MenuItem value={20}>What is your favorite sports game.</MenuItem>
                                    </Select>
                                </FormControl>
                                {passwordQuestionError && <div className="validation-error text-right"> Please select a password questions </div>}
                            </Grid>
                            <Grid item xs={12} sm={12} className="pdT0">
                                <FormControl className={passwordError  ? "password-text-field password-error-border" :"password-text-field"}>
                                    <InputLabel htmlFor="adornment-password">Password <b>*</b></InputLabel>
                                    <Input
                                        name="password"
                                        id="adornment-password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={this.handleValidation}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                { passwordError && <div className="validation-error text-right"> Please enter the password </div>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB15">
                            <Grid item xs={12} sm={5}>
                                <label className="custom-label mrB10">Password Information</label>
                                <TextField
                                   label={<span>Current Password <b>*</b></span>}
                                    margin="dense"
                                    variant="filled"
                                    className={currentPasswordError ? "text-field-dense text-error-border" :'text-field-dense'}
                                    type="password"
                                    name="currentPassword"
                                    onChange={this.handleValidation}
                                    value={currentPassword}
                                />
                               {currentPasswordError && <div className="validation-error text-right"> Please enter a current password</div>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB20">
                            <Grid item xs={12} sm={5} className="pdT0">
                            <TextField
                                   label={<span>New Password <b>*</b></span>}
                                    margin="dense"
                                    variant="filled"
                                    className={newPasswordError ? "text-field-dense text-error-border" :'text-field-dense'}
                                    type="password"
                                    name="newPassword"
                                    onChange={this.handleValidation}
                                    value={newPassword}
                                />
                               {newPasswordError && <div className="validation-error text-right"> Please enter a new password</div>}
                            </Grid>
                            <Grid item xs={12} sm={5} className="pdT0">
                            <TextField
                                   label={<span>Confirm Password <b>*</b></span>}
                                    margin="dense"
                                    variant="filled"
                                    className={confirmPasswordError ? "text-field-dense text-error-border" :'text-field-dense'}
                                    type="password"
                                    name="confirmPassword"
                                    onChange={this.handleValidation}
                                    value={confirmPassword}
                                />
                               {confirmPasswordError && <div className="validation-error text-right"> Please enter a confirm password</div>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={12}>
                                <Button onClick={this.handleValidation} variant="contained" className="btn btn-primary btn-sm mrR10">
                                    Save
                                </Button>
                                <Button onClick={handleCloseDialog} variant="contained" className="btn btn-dark-gray btn-sm ">
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
}

export default EditPasswordDialogbox