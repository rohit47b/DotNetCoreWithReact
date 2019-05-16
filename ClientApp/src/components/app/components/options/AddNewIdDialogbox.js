import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import HighlightOff from '@material-ui/icons/HighlightOff'

class AddNewIdDialogbox extends PureComponent {


    render() {
        const { isOpen, handleCloseDialog } = this.props
        return (

            <Dialog
                open={isOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="dialog-add"
                fullWidth={true}
            >
                <DialogTitle className="dialog-title" id="alert-dialog-title">
                    <span>Add New ID</span>
                    <HighlightOff onClick={handleCloseDialog} />
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <form>
                        <Grid container spacing={16} className="mrB15p">
                            <Grid item xs={12} sm={8}>
                                <label htmlFor="add-doc-name-simple" className="custom-label">Add New ID Types</label>
                                <div className="d-flex align-items-center mrT15">
                                    <TextField
                                        className="bootstrap-text-field no-label form-control-custom mrR10"
                                        //onChange={this.handleChange('name')}
                                        margin="normal"
                                        placeholder="Add document name"
                                        name="docName"
                                        type="text"
                                        id="add-doc-name-simple"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={12}>
                                <Button title="Save" variant="contained" className="btn btn-primary btn-sm mrR10">
                                    Save
                                </Button>
                                <Button title="Cancel" onClick={handleCloseDialog} variant="contained" className="btn btn-dark-gray btn-sm ">
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
}

export default AddNewIdDialogbox;