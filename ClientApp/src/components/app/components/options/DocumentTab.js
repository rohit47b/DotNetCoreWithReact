import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import Chip from '@material-ui/core/Chip'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class DocumentTab extends PureComponent {
    state = {
        chipData: [
            { key: 0, label: 'Document abc' },
            { key: 1, label: 'Document default' },
        ],
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
        });
    };


    render() {
        return (
            <Typography component="div" className="tab-content">
                <form>
                    <div className="content-box">
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={4}>
                                <label htmlFor="add-doc-name" className="custom-label">Add Documents</label>
                                <div className="d-flex align-items-center">
                                    <TextField
                                        className="bootstrap-text-field no-label form-control-custom mrR10"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        placeholder="Add document name"
                                        name="docName"
                                        type="text"
                                        id="add-doc-name"
                                    />
                                        <AddCircleIcon className="add-icon" />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={12}>
                                {this.state.chipData.map(data => {
                                    return (
                                        <div className="mrB10">
                                            <Chip
                                                key={data.key}
                                                //icon={icon}
                                                label={data.label}
                                                onDelete={this.handleDelete(data)}
                                                className="chip-gray"
                                            />
                                        </div>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={12} className="text-right">
                            <Button title="Cancel" variant="contained" className="btn btn-dark-gray btn-sm mrR10">
                                Cancel
                            </Button>
                            <Button title="Save" variant="contained" className="btn btn-primary btn-sm">
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
