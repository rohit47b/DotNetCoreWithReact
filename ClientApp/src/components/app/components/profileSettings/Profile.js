import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import EditIcon from '@material-ui/icons/Edit';

import EditGeneralInfoDialogbox from './EditGeneralInfoDialogbox'
import EditPasswordDialogbox from './EditPasswordDialogbox'


class Profile extends PureComponent {
    state = {
        GeneralInfoData: [
            { key: 0, label: 'Name', labelInfo: 'John Smith  ' },
            { key: 1, label: 'Company', labelInfo: 'SimplySecure' },
            { key: 2, label: 'Email', labelInfo: 'John@ss.com' },
        ],
        AddressData: [
            { key: 0, label: 'Address', labelInfo: 'AVB Street' },
            { key: 1, label: 'City', labelInfo: 'Houston' },
            { key: 2, label: 'State', labelInfo: 'Texas' },
            { key: 3, label: 'ZIP', labelInfo: '10001' },
            { key: 4, label: 'Country', labelInfo: 'USA' }
        ],
        open: false,
        openEditDialog:false
    }

    handleDialogOpen = () => {
        this.setState({ open: true});
    }

    handleCloseDialog = () => {
        this.setState({ open:false,openEditDialog: false });
    }

    handleDialogEditInfoOpen = () => {
        this.setState({ openEditDialog: true});
    }

    

    render() {
        const { GeneralInfoData, AddressData,open,openEditDialog} = this.state
        return (
            <Typography className="tab-container" component="div">
                <div style={{ minHeight: "60vh" }}>
                    <Grid container className="mrB15">
                        <Grid item xs={12} md={6} lg={5} className="profile-info">
                            <Typography className="heading-small mrB15" component="div">
                                General Information
                                <div className="icon-box">
                                   <EditIcon className="edit-circle-icon"  onClick={this.handleDialogOpen} />
                                </div>
                            </Typography>
                            <div className="list-charges">
                                {GeneralInfoData.map(data => {
                                    return (
                                        <div className="list-charges-items">
                                            <span className="list-charges-title">
                                                {data.label}
                                            </span>
                                            <span className="separate-dot">:</span>
                                            <span className="mrL10 font-600 info-text">
                                                {data.labelInfo}
                                            </span>
                                        </div>
                                    )
                                })}
                                <div className="mrT30">
                                    {AddressData.map(data => {
                                        return (
                                            <div className="list-charges-items">
                                                <span className="list-charges-title">
                                                    {data.label}
                                                </span>
                                                <span className="separate-dot">:</span>
                                                <span className="mrL10 font-600 info-text">
                                                    {data.labelInfo}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="mrT30">
                                    <div className="list-charges-items">
                                        <span className="list-charges-title">
                                            Work Phone
                                            </span>
                                        <span className="separate-dot">:</span>
                                        <span className="mrL10 font-600 info-text">
                                            +1 2541 2154
                                        </span>
                                    </div>
                                    <div className="list-charges-items">
                                        <span className="list-charges-title">
                                            Home Phone
                                            </span>
                                        <span>:</span>
                                        <span className="mrL10 font-600 info-text">
                                            +1 2541 1452
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={5} className="profile-info">
                            <Typography className="heading-small mrB15" component="div">
                                Password Info
                                <div className="icon-box">
                                   <EditIcon className="edit-circle-icon"  onClick={this.handleDialogEditInfoOpen} />
                                </div>
                            </Typography>
                            <div className="password-info">
                                <Typography component="p">
                                    Password Question
                                </Typography>
                                <Typography className="font-600 mrB20" component="p">
                                    What is your City of Birth?
                                </Typography>
                                <Typography component="p">
                                    Answer
                                </Typography>
                                <Typography component="p" className="mrB20">
                                    *****
                                </Typography>
                                <Typography component="p">
                                     Your Profile Password
                                </Typography>
                                <Typography component="p">
                                    *****
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <hr className="divider mrB30" />
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={12}>
                        <Button title="Save" variant="contained" className="btn btn-primary btn-sm mrR10">
                            Save
                        </Button>
                        <Button title="Cancel" variant="contained" className="btn btn-dark-gray btn-sm ">
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
                <EditGeneralInfoDialogbox isOpen={open} handleCloseDialog={this.handleCloseDialog}/>
                <EditPasswordDialogbox isOpen={openEditDialog } handleCloseDialog={this.handleCloseDialog}/>
            </Typography>
        )
    }
}

export default Profile
