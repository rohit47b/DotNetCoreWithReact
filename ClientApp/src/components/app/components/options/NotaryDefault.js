import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import React, { PureComponent } from 'react';
import DocumentTab from "./DocumentTab";
import SignerTab from "./SignerTab";


class NotaryDefault extends PureComponent {
    state = {
        value: 0,
        country:"",
        checkedB:true
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSwitchChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { checkedB, country, value } = this.state
        return (
            <Typography className="tab-container" component="div">
                <Grid container spacing={16} className="mrB20">
                    <Grid item xs={12} sm={3}>
                        <FormControl className="select-form-control">
                            <InputLabel shrink htmlFor="label-placeholder">
                                Country
                            </InputLabel>
                            <Select
                                value={country}
                                onChange={this.handleChange}
                                input={<Input name="country" id="label-placeholder" />}
                                className="select-box-bootstrap"
                                name="country"
                            >
                                <MenuItem value={10}>
                                    Select Country
                                </MenuItem>
                                <MenuItem value={20}>India</MenuItem>
                                <MenuItem value={30}>UK</MenuItem>
                                <MenuItem value={40}>US</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9} >
                        <div className="checkbox-info d-flex align-items-center">
                            <Checkbox
                                checked={checkedB}
                                onChange={this.handleSwitchChange('checkedB')}
                                value="checkedB"
                                color="primary"
                                className="checkbox-primary"
                            />
                            <span>Require Signer Signature in Journal</span>
                            <Checkbox
                                checked={checkedB}
                                onChange={this.handleSwitchChange('checkedB')}
                                value="checkedB"
                                color="primary"
                                className="checkbox-primary"
                            />
                            <span>Capture Electronic Journal</span>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Tabs className="tab-nav-2" value={value} onChange={this.handleTabChange}>
                            <Tab className="tab-nav-item-2" label={<span><EditIcon /> Documents</span>} />
                            <Tab className="tab-nav-item-2" label={<span><PersonIcon /> Signers</span>} />
                        </Tabs>
                        {value === 0 && <DocumentTab/>}
                        {value === 1 && <SignerTab/>}
                    </Grid>
                </Grid>

            </Typography>
        )
    }
}

export default NotaryDefault
