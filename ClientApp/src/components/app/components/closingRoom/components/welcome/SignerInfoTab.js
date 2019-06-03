import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FilledInput from '@material-ui/core/FilledInput'

import SignerSignatureInfo from './SignerSignatureInfo'

class DocumentTab extends PureComponent {
    state = {
        city: '',
        state: '',
        country: '',
        idType: '',
        name: 'hai',
        labelWidth: 0,
        value: 0,
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        countryError: false,
        idTypeError: false,
        firstname: "",
        lastname: "",
        email: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
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

    handleValidation = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

        if (name === 'firstname') {
            if (value === '' || value === null) {
                this.setState({
                    firstnameError: true
                })
            } else {
                this.setState({
                    firstnameError: false,
                    [name]: value
                })
            }
        }
        if (e.target.name === 'lastname') {
            if (e.target.value === '' || e.target.value === null) {
                this.setState({
                    lastnameError: true
                })
            } else {
                this.setState({
                    lastnameError: false,
                    [name]: value
                })
            }
        }
        if (e.target.name === 'country') {
            if (e.target.value === '' || e.target.value === null) {
                this.setState({
                    countryError: true
                })
            } else {
                this.setState({
                    countryError: false,
                    [name]: value
                })
            }
        }
        if (e.target.name === 'idType') {
            if (e.target.value === '' || e.target.value === null) {
                this.setState({
                    idTypeError: true
                })
            } else {
                this.setState({
                    idTypeError: false,
                    [name]: value
                })
            }
        }
        if (e.target.name === 'email') {
            this.validateEmail(e.target.value);
        }
    }

    /** custom validation code end */

    render() {
        const { city, state, country, idType, firstnameError, lastnameError, emailError, countryError, firstname, lastname, email, idTypeError } = this.state
        return (
            <Typography component="div" className="tab-content">
                <form>
                    <div className="content-box">
                        <Grid container spacing={32}>
                            <Grid item xs={12} sm={12} lg={6}>
                                <form>
                                    <Grid container spacing={16} className="mrB10">
                                        <Grid item xs={12} sm={12}>
                                            <Typography className="heading-small" variant="h5" component="h4">
                                                Signer Info
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                name="firstname"
                                                label={<span>First Name <b>*</b></span>}
                                                margin="dense"
                                                variant="filled"
                                                onChange={this.handleValidation}
                                                className={firstnameError ? "text-field-dense text-error-border" : 'text-field-dense'}
                                                type="text"
                                                value={firstname}
                                            />
                                            {firstnameError && <div className="validation-error text-right"> Please enter a valid first name </div>}
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                name="mname"
                                                label="Middle Name"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                name="lastname"
                                                label={<span>Last Name <b>*</b></span>}
                                                margin="dense"
                                                variant="filled"
                                                onChange={this.handleValidation}
                                                className={lastnameError ? "text-field-dense text-error-border" : 'text-field-dense'}
                                                type="text"
                                                value={lastname}
                                            />
                                            {lastnameError && <div className="validation-error text-right"> Please enter a valid last name </div>}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className="mrB10">
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                name="companyname"
                                                label="Company Name"
                                                margin="dense"
                                                variant="filled"
                                                onChange={this.handleValidation}
                                                className="text-field-dense"
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
                                                className={emailError ? "text-field-dense text-error-border" : 'text-field-dense'}
                                                type="email"
                                                value={email}
                                            />
                                            {emailError && <div className="validation-error text-right"> Please enter a valid email id </div>}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className="mrB10">
                                        <Grid item xs={12} sm={8}>
                                            <TextField
                                                name="address"
                                                label="Address"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
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
                                    <Grid container spacing={16} className="mrB10">
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
                                            <FormControl variant="filled" className={countryError ? "select-control select-error-border" : "select-control"}>
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
                                            {countryError && <div className="validation-error text-right"> Please select a country </div>}

                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className="mrB30">
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
                                            <Typography className="heading-small" variant="h5" component="h4">
                                                Identification
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <FormControl variant="filled" className={idTypeError ? "select-control select-error-border" : "select-control"}>
                                                <InputLabel htmlFor="filled-idType-simple">Id Type <b>*</b></InputLabel>
                                                <Select
                                                    value={idType}
                                                    onChange={this.handleValidation}
                                                    input={<FilledInput name="idType" id="filled-idType-simple" />}
                                                    className="select-box"
                                                    name="idType"

                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Id1</MenuItem>
                                                    <MenuItem value={20}>Id2</MenuItem>
                                                </Select>
                                            </FormControl>
                                            {idTypeError && <div className="validation-error text-right"> Please select a Id Type </div>}
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={5} className="mrT10">
                                <SignerSignatureInfo />
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </Typography>
        )
    }
}

export default DocumentTab
