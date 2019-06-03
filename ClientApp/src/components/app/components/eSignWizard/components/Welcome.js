import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import HelpIcon from '@material-ui/icons/Help'
import PropTypes from 'prop-types'

import history from 'customHistory'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    }
});

class Welcome extends PureComponent {
    state = {
        city: '',
        name: 'hai',
        labelWidth: 0,
        value: 0,
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        mobileError: false,
        firstname: "",
        lastname: "",
        email: '',
        mobile: ''

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleTabChange = (event, value) => {
        this.setState({ value });
    };
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
        if (e.target.name === 'mobile') {
            if (e.target.value === '' || e.target.value === null) {
                this.setState({
                    mobileError: true
                })
            } else {
                this.setState({
                    mobileError: false,
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
        const { value, firstnameError, lastnameError, emailError, firstname, lastname, email, mobile, mobileError } = this.state
        return (
            <div>
                <Grid container justify="center" className="top-gray-bg">
                    <Grid item xs={12} sm={12} lg={8}>
                        <Grid container>
                            <Grid item xs={6} sm={6} className="d-flex align-item-end">
                                <Typography className="heading-large" gutterBottom variant="h5" component="h3">
                                    eSign wizard / <span className="font-normal">Welcome</span>  <span><HelpIcon style={{ fontSize: 16, color: "#0073CF", cursor: "pointer" }} /></span>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} className="text-right">
                                <Button title="Save & Continue" onClick={() => history.push('/app/eSign-wizard/signing-room')} variant="contained" color="primary" className="btn btn-common btn-blue">
                                    Save & Continue
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" className="card-container">
                    <Grid item xs={12} sm={8}>
                        <Card className="card-white mrB20">
                            <CardContent className="card-content">
                                <Stepper className="stepper mrB20" alternativeLabel>
                                    <Step className="step-item un-complete">
                                        <StepLabel className="step-label">Welcome</StepLabel>
                                    </Step>
                                    <Step className="step-item step-next">
                                        <StepLabel className="step-label">Signing Room</StepLabel>
                                    </Step>
                                    <Step className="step-item step-next">
                                        <StepLabel className="step-label">Review & Submit</StepLabel>
                                    </Step>
                                </Stepper>
                                <Typography className="mrB20 heading-small" variant="h5" component="h4">
                                    Welcome ro Closing Room Wizard.
                                </Typography>
                                <Typography className="mrB20 fnt-13" component="p">
                                    The wizard will guide you through the process of notarizing closing documents. The closing Room Wizard will walk the Notary and signer through the process of signing and notarization the closing documents as well as gathering the way the signer is identified to be entered into the notaries electronic journal.
                                </Typography>

                                <Grid container spacing={16}>
                                    <Grid item sm={12} md={2}>
                                        <Typography className="mrB20 heading-small" variant="h5" component="h4">
                                            User Info
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={12} md={10}>
                                        <form>
                                            <Grid container spacing={16} className="mrB15">
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

                                            <Grid container spacing={16} className="mrB15">
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
                                                <Grid item xs={12} sm={4}>
                                                    <TextField
                                                        name="mobile"
                                                        label={<span>Mobile <b>*</b></span>}
                                                        margin="dense"
                                                        variant="filled"
                                                        onChange={this.handleValidation}
                                                        className={mobileError ? "text-field-dense text-error-border" : 'text-field-dense'}
                                                        type="text"
                                                        value={mobile}
                                                    />
                                                    {mobileError && <div className="validation-error text-right"> Please enter a mobile number </div>}
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
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
                                            <Grid container spacing={16} className="mrB15">
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
                                                    <TextField
                                                        label="Phone"
                                                        margin="dense"
                                                        variant="filled"
                                                        className="text-field-dense"
                                                        name="phone"
                                                        type="text"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={16}>
                                                <Grid item xs={12} sm={4}>
                                                    <FormControl variant="filled" className="select-control">
                                                        <InputLabel htmlFor="filled-city-simple">City</InputLabel>
                                                        <Select
                                                            value={this.state.city}
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
                                                <Grid item xs={12} sm={4}>
                                                    <FormControl variant="filled" className="select-control">
                                                        <InputLabel htmlFor="filled-city-simple">State</InputLabel>
                                                        <Select
                                                            value={this.state.city}
                                                            onChange={this.handleChange}
                                                            input={<FilledInput name="city" id="filled-city-simple" />}
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
                                                        label="Pin Code"
                                                        margin="dense"
                                                        variant="filled"
                                                        className="text-field-dense"
                                                        name="pincode"
                                                        type="text"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card className="card-white">
                            <CardContent className="card-content">
                                <Grid container spacing={16}>
                                    <Grid item xs={12} lg={2}>
                                        <Typography className="heading-small" variant="h5" component="h4">
                                            Signer's<br /> Signature
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={10}>
                                        <Tabs
                                            value={value}
                                            onChange={this.handleTabChange}
                                            className="nav-tab"
                                        >
                                            <Tab
                                                disableRipple
                                                label="Screen"
                                                className="nav-tab-btn"
                                            />
                                            <Tab
                                                disableRipple
                                                label="Camera"
                                                className="nav-tab-btn"
                                            />
                                            <Tab
                                                disableRipple
                                                label="Topaz"
                                                className="nav-tab-btn"
                                            />
                                        </Tabs>
                                        {value === 0 &&
                                            <Typography className="tab-container" component="div">
                                                <Grid container spacing={16}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Typography className="fnt-13 mrB5" component="p">
                                                            Signer's Signature
                                                        </Typography>
                                                        <div className="border-box">
                                                            <div className="icon-box">
                                                                <DoneIcon className="fnt-16 add-circle-icon" />
                                                                <EditIcon className="fnt-16 edit-circle-icon" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Typography className="fnt-13 mrB5" component="p">
                                                            Initials
                                                        </Typography>
                                                        <div className="border-box">
                                                            <div className="icon-box">
                                                                <DoneIcon className="fnt-16 add-circle-icon" />
                                                                <EditIcon className="fnt-16 edit-circle-icon" />
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Typography>
                                        }
                                        {value === 1 &&
                                            <Typography className="tab-container" component="div">
                                                2
                                            </Typography>
                                        }
                                        {value === 2 &&
                                            <Typography className="tab-container" component="div">
                                                3
                                            </Typography>
                                        }
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Welcome)