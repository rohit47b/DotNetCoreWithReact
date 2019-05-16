import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import React, { PureComponent } from 'react';


class SignerSignatureInfo extends PureComponent {
    state = {
        value: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state
        return (
            <Grid container spacing={16}>
                <Typography className="heading-small mrB7" variant="h5" component="h4">
                    Signer's Signature
                </Typography>
                <Grid item xs={12} sm={12}>
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
                                <Grid container spacing={16}>
                                    <Grid item xs={12} sm={12}>
                                        <Typography className="fnt-13 mrB5" component="p">
                                            Initials
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

        )
    }
}



export default SignerSignatureInfo