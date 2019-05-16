import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import AddNewIdDialogbox from "./AddNewIdDialogbox"

class IDTypes extends PureComponent {
    state = {
        chipData: [
            { key: 0, label: 'Personally Known' },
            { key: 1, label: 'Personally Known' },
            { key: 2, label: 'Personally Known' },
            { key: 3, label: "Driver's License" },
            { key: 4, label: "Driver's License" },
            { key: 5, label: "Driver's License" },
            { key: 6, label: 'Passport' },
            { key: 7, label: 'Passport' },
            { key: 8, label: 'Passport' },
            { key: 9, label: 'Credible Witness' },
            { key: 10, label: 'Credible Witness' },
            { key: 11, label: 'Credible Witness' },
            { key: 12, label: 'Bank Photo ID' },
         

        ],
        open: false
    }

    handleDelete = data => () => {
        if (data.label === 'React') {
            alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
            return;
        }
        this.setState(state => {
            const chipData = [...state.chipData];
            const chipToDelete = chipData.indexOf(data);
            chipData.splice(chipToDelete, 1);
            return { chipData };
        })
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }

    render() {
        const {open}=this.state
        return (
            <Typography className="tab-container" component="div">
                <div style={{ minHeight: "60vh" }}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={12}>
                            <Typography className="heading-small mrB15" component="div">
                                Available ID Types
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} className="mrB15">
                        <Grid item xs={12} sm={6}>
                            {this.state.chipData.map(data => {
                                return (
                                    <span>
                                        <Chip
                                            key={data.key}
                                            //icon={icon}
                                            label={data.label}
                                            onDelete={this.handleDelete(data)}
                                            className="chip-gray mrB10 mrR10"
                                        />
                                    </span>
                                );
                            })}
                            <span>
                                <Chip
                                    //icon={icon}
                                    label={"Bank Photo ID"}
                                    onDelete={this.handleDelete}
                                    className="chip-gray mrB10 mrR10 active"
                                />
                            </span>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={6}>
                            <Button title="Add new ID" onClick={this.handleDialogOpen} variant="outlined" className="btn btn-outline btn-sm mrR10">
                                Add new ID
                            </Button>
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
                <AddNewIdDialogbox isOpen={open} handleCloseDialog={this.handleCloseDialog} />
            </Typography>
        )
    }
}

export default IDTypes
