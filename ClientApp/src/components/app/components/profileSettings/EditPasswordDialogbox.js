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
        questions: '',
        name: 'hai',
        labelWidth: 0,
        value: 0,
        showPassword: false,
        password: ''
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

    handlePasswordChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };


    render() {
        const { isOpen, handleCloseDialog } = this.props
        const { questions } = this.state
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
                                <FormControl variant="filled" className="select-control">
                                    <InputLabel htmlFor="filled-questions-simple">Password Questions</InputLabel>
                                    <Select
                                        value={questions}
                                        onChange={this.handleChange}
                                        input={<FilledInput name="questions" id="filled-questions-simple" />}
                                        className="select-box"
                                        name="questions"
                                    >
                                        <MenuItem value="">
                                            <em>Password Questions</em>
                                        </MenuItem>
                                        <MenuItem value={10}>What is your city of birth?</MenuItem>
                                        <MenuItem value={20}>What is your favorite sports game.</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} className="pdT0">
                                <FormControl className="password-text-field">
                                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        id="adornment-password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange('password')}
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
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB15">
                            <Grid item xs={12} sm={4}>
                                <label className="custom-label mrB10">Password Information</label>
                                <TextField
                                    label="Current Password"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="password"
                                    name="password"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB20">
                            <Grid item xs={12} sm={4} className="pdT0">
                                <TextField
                                    label="New Password"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="password"
                                    name="newPassword"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} className="pdT0">
                                <TextField
                                    label="Confirm Password"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="password"
                                    name="confirmPassword"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={12}>
                                <Button variant="contained" className="btn btn-primary btn-sm mrR10">
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