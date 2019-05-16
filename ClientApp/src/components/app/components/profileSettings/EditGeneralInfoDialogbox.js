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
        state:'',
        country:'',
        name: 'hai',
        labelWidth: 0,
        value: 0,
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


    render() {
        const { isOpen, handleCloseDialog } = this.props
        const { city,state,country } = this.state
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
                                    label="First Name"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="fname"
                                />
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
                                    label="Last Name"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="lname"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB10">
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Company Name"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="cname"
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    label="Email Id"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="email"
                                    name="email"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className="mrB10">
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    label="Address"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="address"
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
                                    label="ZIP"
                                    margin="dense"
                                    variant="filled"
                                    className="text-field-dense"
                                    type="text"
                                    name="zipcode"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="filled" className="select-control">
                                    <InputLabel htmlFor="filled-country-simple">Country</InputLabel>
                                    <Select
                                        value={country}
                                        onChange={this.handleChange}
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