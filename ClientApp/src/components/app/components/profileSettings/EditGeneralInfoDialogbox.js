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
import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField'

class EditGeneralInfoDialogbox extends PureComponent {
    state = {
        city: '',
        state: '',
        country: '',
        name: 'hai',
        labelWidth: 0,
        value: 0,
        errors: {}
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    handlePasswordChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleValidation = (e) => {
        let errors = {}
        let name = e.target.name
        if (name === 'firstname' && e.target.value.trim().length === 0) {
            errors.firstname = 'First Name is required!'
        }

        if (name === 'lastname' && e.target.value.trim().length === 0) {
            errors.lastname = 'Last Name is required!'
        }

        if (name === 'companyname' && e.target.value.trim().length === 0) {
            errors.companyname = 'Company Name is required!'
        }

        if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            errors.email = 'Invalid email address'
        }

        if (name === 'country') {
            this.setState({ [e.target.name]: e.target.value });
        }
        if (name === 'country' && e.target.value === "") {
            errors.country = 'Country is required!'
        }
        if (name === 'idType') {
            this.setState({ [e.target.name]: e.target.value });
        }
        if (name === 'idType' && e.target.value === "") {
            errors.idType = 'Id Type is required!'
        }
        this.setState({
            errors
        })
    }


    render() {
        const { isOpen, handleCloseDialog } = this.props
        const { city, state, country, errors } = this.state
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
                    <span>Edit Info</span>
                    <HighlightOff onClick={handleCloseDialog} />
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <form>
                        <Grid container spacing={16} className="mrB10">
                            <Grid item xs={12} sm={12}>
                                <label className="custom-label">General Info</label>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    name="firstname"
                                    label={<span>First Name <b>*</b></span>}
                                    margin="dense"
                                    variant="filled"
                                    onChange={this.handleValidation}
                                    className={errors.firstname ? "text-field-dense text-error-border" : 'text-field-dense'}
                                    type="text"
                                />
                                {errors.firstname && <div className="validation-error text-right"> Please enter a valid first name </div>}
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Middle Name"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="mname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    name="lastname"
                                    label={<span>Last Name <b>*</b></span>}
                                    margin="dense"
                                    variant="filled"
                                    onChange={this.handleValidation}
                                    className={errors.lastname ? "text-field-dense text-error-border" : 'text-field-dense'}
                                    type="text"
                                />
                                {errors.lastname && <div className="validation-error text-right"> Please enter a valid last name </div>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB10">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Company Name"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    name="cname"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    name="email"
                                    label={<span>Email id <b>*</b></span>}
                                    margin="dense"
                                    variant="filled"
                                    onChange={this.handleValidation}
                                    className={errors.email ? "text-field-dense text-error-border" : 'text-field-dense'}
                                    type="email"
                                />
                                {errors.email && <div className="validation-error text-right"> Please enter a valid email id </div>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB10">
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    label="Address"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    name="address"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="filled" className="select-control">
                                    <InputLabel htmlFor="filled-city-simple">City</InputLabel>
                                    <Select
                                        value={city}
                                        onChange={this.handleChange}
                                        input={<FilledInput name="city" id="filled-city-simple" />}
                                        className="select-box"
                                        name="city"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Indore</MenuItem>
                                        <MenuItem value={20}>Lucknow</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB20">
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="filled" className="select-control">
                                    <InputLabel htmlFor="filled-state-simple">State</InputLabel>
                                    <Select
                                        value={state}
                                        onChange={this.handleChange}
                                        input={<FilledInput name="state" id="filled-state-simple" />}
                                        className="select-box"
                                        name="state"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>MP</MenuItem>
                                        <MenuItem value={20}>UP</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Zipcode"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="zipcode"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="filled" className={errors.country ? "select-control select-error-border" : "select-control"}>
                                    <InputLabel htmlFor="filled-country-simple">Country <b>*</b></InputLabel>
                                    <Select
                                        value={country}
                                        onChange={this.handleValidation}
                                        input={<FilledInput name="country" id="filled-country-simple" />}
                                        className="select-box"
                                        name="country"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>India</MenuItem>
                                        <MenuItem value={20}>US</MenuItem>
                                    </Select>
                                </FormControl>
                                {errors.country && <div className="validation-error text-right"> Please select a country </div>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB20">
                            <Grid item xs={12} sm={12}>
                                <label className="custom-label">Contact Info</label>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Work Phone"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="workPhone"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Home Phone"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="homePhone"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={12}>
                                <Button title="Save" variant="contained" className="btn btn-primary btn-sm mrR10">
                                    Save
                                </Button>
                                <Button title="Cancel" onClick={handleCloseDialog} variant="contained" className="btn btn-dark-gray btn-sm ">
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

export default EditGeneralInfoDialogbox