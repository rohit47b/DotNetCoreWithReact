import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import React, { PureComponent } from 'react';

class NotaryInfoTab extends PureComponent {
    state = {
        value: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state
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
                                                Notary Info
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                label="Name"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                                name="name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                label="Commission"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                                name="commission"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                label="Country"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                                name="country"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16} className="mrB10">
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                label="State"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                                name="state"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                label="Start date"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                                name="startDate"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                label="End date"
                                                margin="dense"
                                                variant="filled"
                                                className="text-field-dense"
                                                type="text"
                                                name="endDate"
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={16}>
                                        <Grid item xs={12} sm={12}>
                                            <Typography className="heading-small" variant="h5" component="h4">
                                                Notary's Signature
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={8}>
                                            <div className="tab-box">
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
                                                        <Grid container spacing={16} className="mrB10">
                                                            <Grid item xs={12} sm={12}>
                                                                <Typography className="fnt-13 mrB5" component="p">
                                                                    Signer's Signature
                                                                    </Typography>
                                                                <div className="border-box">
                                                                    <div className="icon-box">
                                                                        <DoneIcon className="add-circle-icon" />
                                                                        <EditIcon className="edit-circle-icon" />
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
                                            </div>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </Typography>
        )
    }
}

export default NotaryInfoTab
