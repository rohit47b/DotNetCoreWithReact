import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'

class NotaryCharge extends PureComponent {
    state={
        NotaryChargesData: [
            { key: 0, label: 'Acknowledgment' },
            { key: 1, label: 'Affidavit' },
            { key: 2, label: 'Certificate' },
            { key: 3, label: "Certified Copy from the Register" },
            { key: 4, label: "Deposition" },
            { key: 5, label: "Jurat" },
            { key: 6, label: 'Oath' },
            { key: 7, label: 'Other' },
            { key: 8, label: 'Protest' },
            { key: 9, label: 'Verification' },
            { key: 10, label: ' Witness or Attest Signature' }
        ],
    }

    render() {
        const {NotaryChargesData} =this.state
        return (
            <Typography className="tab-container" component="div">
                <div style={{ minHeight: "60vh" }}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={12}>
                            <Typography className="heading-small mrB15" component="div">
                                Notary Charges
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB15">
                        <Grid item xs={12} sm={12}>
                            <div className="list-charges list-notary-charge">
                            {NotaryChargesData.map(data => {
                                return (
                                    <div className="list-charges-items">
                                        <span className="list-charges-title">
                                            {data.label}
                                        </span>
                                        <span className="separate-dot">:</span>
                                        <span className="mrL15 mrR5 currency">$ </span>
                                        <span>
                                            <TextField
                                                className="bootstrap-text-field no-label form-control-custom mrR10"
                                                //onChange={this.handleChange('name')}
                                                margin="normal"
                                                placeholder="0.00"
                                                name="charge"
                                                type="text"
                                            />
                                        </span>
                                    </div>
                                    )
                                })}
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
                        <Button  title="Cancel" variant="contained" className="btn btn-dark-gray btn-sm ">
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Typography>
        )
    }
}

export default NotaryCharge
