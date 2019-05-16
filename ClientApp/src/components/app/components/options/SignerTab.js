import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

class DocumentTab extends PureComponent {
    state = {
        city: '',
        state: '',
        country:'',
        name: '',
        labelWidth: 0,
        value: 0,
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleTabChange = (event, value) => {
        this.setState({ value });
    }
    render() {
        const { city,state,country,value } = this.state
        return (
            <Typography component="div" className="tab-content pd0">
                <form>
                    <div className="content-box">
                        <Grid container className="height-100">
                            <Grid item xs={12} sm={2} className="left-side-nav">
                                <div className="search-box">
                                    <TextField
                                        id="standard-full-width"
                                        style={{ margin: 8 }}
                                        placeholder="Search"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><SearchIcon className="search-icon"/></InputAdornment>,
                                          }}
                                        className="search-text-field"
                                        type="text"
                                        name="search"
                                    />
                                </div>
                                <List className="left-side-menu">
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="John Smith" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Ajay" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Mark knolls" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Tom Lewis" />
                                    </ListItem>
                                    <ListItem className="left-side-menu-item">
                                        <Checkbox
                                            tabIndex={-1}
                                            disableRipple
                                            color="primary"
                                        />
                                        <ListItemText className="left-side-menu-text" primary="Jackson" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={10} className="right-side-content">
                                <div className="top-header">
                                    <span className="top-title">Add Signer</span>
                                    <Button variant="outlined" className="btn btn-outline btn-sm mrR10">
                                        Save
                                    </Button>
                                    <Button variant="contained" className="btn btn-gray btn-sm">
                                        Cancel
                                    </Button>
                                </div>
                                <div className="sec-form">
                                    <form>
                                        <Grid container spacing={16} className="mrB15">
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="First Name"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="fname"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Middle Name"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="mname"
                                                    type="text"
                                                />
                                                {/* <div className="validation-error">Please enter a valid middle name</div> */}
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Last Name"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="lname"
                                                    type="text"
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={16} className="mrB15">
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Company Name"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="cname"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Email id"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="email"
                                                    type="email"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={16} className="mrB15">
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Address"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="address"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
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
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Work Phone"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="workPhone"
                                                    type="text"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={16}>
                                            <Grid item xs={12} sm={3}>
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
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Zip"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="zipcode"
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
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
                                                        <MenuItem value={20}>UK</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <TextField
                                                    label="Home Phone"
                                                    margin="dense"
                                                    variant="filled"
                                                    className="text-field-dense"
                                                    name="homePhone"
                                                    type="text"
                                                />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container>
                        <Grid item xs={12} sm={12} className="text-right footer-btn ">
                            <Button variant="contained" className="btn btn-dark-gray btn-sm mrR10">
                                Cancel
                            </Button>
                            <Button variant="contained" className="btn btn-primary btn-sm">
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Typography>
        )
    }
}

export default DocumentTab
