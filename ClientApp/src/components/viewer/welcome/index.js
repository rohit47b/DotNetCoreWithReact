import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import history from 'customHistory'

class Welcome extends PureComponent {

    state = {
        open: true,
      };
    
    render() {
        const{open} =this.state
        return (
            <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="dialog-viewer"
        >
          <DialogTitle className="text-center dialog-title" id="alert-dialog-title">{"Welcome"}</DialogTitle>
          <DialogContent className="dialog-content">
            <DialogContentText  className="text-center mrB20" id="alert-dialog-description">
              You are invited by "Notary" please enter the below information <br/> to join meeting
            </DialogContentText>
            <form className="form-join">
            <TextField
                id="standard-full-width"
                label="Your Name"
                placeholder="Enter your name"
                fullWidth
                margin="normal"
                className="bootstrap-text-field mrB30"
                InputLabelProps={{
                    shrink: true,
                }}
                type="text"
                name="name"
            />
            <Button className="btn btn-primary btn-block"  onClick={() => history.push('/app/viewer/signing-room')}>Joining Meeting</Button>
                       
            </form>
          </DialogContent>
        </Dialog>

        )
    }
};

export default Welcome
