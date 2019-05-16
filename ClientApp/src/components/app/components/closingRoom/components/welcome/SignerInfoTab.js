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
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { city, state, country, idType } = this.state
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
                                                name="fname"
                                                label="First Name"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                            />
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
                                                name="lname"
                                                label="Last Name"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className="mrB10">
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                name="cname"
                                                label="Company Name"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <TextField
                                                 name="email"
                                                label="Email Id"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="email"
                                            />
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
                                            <FormControl variant="filled" className="select-control">
                                                <InputLabel htmlFor="filled-idType-simple">ID Type</InputLabel>
                                                <Select
                                                    value={idType}
                                                    onChange={this.handleChange}
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
