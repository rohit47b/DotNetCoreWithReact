import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class Commissions extends PureComponent {

    render() {
        return (
            <Typography className="tab-container" component="div">
                <div style={{ minHeight: "60vh" }}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={12}>
                            Commissions
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
            </Typography>
        )
    }
}

export default Commissions