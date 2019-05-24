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
        errors:{}
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleValidation = (e) => {

        let  errors = {}
 
        let name = e.target.name
        if (name === 'firstname' && e.target.value.trim().length===0) {
            errors.firstname = 'First Name is required!'
        }

        if (name === 'lastname' && e.target.value.trim().length===0) {
            errors.lastname = 'Last Name is required!'
        }

        if (name === 'companyname' && e.target.value.trim().length===0) {
            errors.companyname = 'Company Name is required!'
        }

        if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            errors.email = 'Invalid email address'
        }

        if(name === 'country' ){
            this.setState({ [e.target.name]: e.target.value });
        }
        if (name === 'country' && e.target.value==="") {
            errors.country = 'Country is required!'
        }
        if(name === 'idType' ){
            this.setState({ [e.target.name]: e.target.value });
        }
        if (name === 'idType' && e.target.value==="") {
            errors.idType = 'Id Type is required!'
        }

        this.setState({
            errors
        })
    }

    render() {
        const { city, state, country, idType,errors } = this.state
        return (
            <Typography component="div" className="tab-content">
                <form>
                    <div className="content-box">
                        <Grid container spacing={32}>
                            <Grid item xs={12}  sm={12} lg={6}>
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
                                                className={errors.firstname ? "text-field-dense text-error-border" :'text-field-dense'}
                                                type="text"
                                            />
                                             { errors.firstname && <div className="validation-error text-right"> Please enter a valid first name </div>}
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
                                                className={errors.lastname ? "text-field-dense text-error-border" :'text-field-dense'}
                                                type="text"
                                            />
                                            { errors.lastname && <div className="validation-error text-right"> Please enter a valid last name </div>}
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
                                                className={errors.email ? "text-field-dense text-error-border" :'text-field-dense'}
                                                type="email"
                                            />
                                             { errors.email && <div className="validation-error text-right"> Please enter a valid email id </div>}
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
                                            <FormControl variant="filled" className={errors.country  ? "select-control select-error-border" :"select-control"}>
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
                                            { errors.country && <div className="validation-error text-right"> Please select a country </div>}
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
                                            <FormControl variant="filled"className={errors.idType  ? "select-control select-error-border" :"select-control"}>
                                                <InputLabel htmlFor="filled-idType-simple">ID Type</InputLabel>
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
                                                    <MenuItem value={10}>ID Type1</MenuItem>
                                                    <MenuItem value={20}>ID Type2</MenuItem>
                                                </Select>
                                            </FormControl>
                                            { errors.idType && <div className="validation-error text-right"> Please select a Id Type </div>}
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
