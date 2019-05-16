import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import React, { PureComponent } from 'react';
import Calendar from "./Calendar";
import ChatBox from './ChatBox';
import NewClosingPackageDialog from './NewClosingPackageDialog';


class ClosingRoom extends PureComponent {
    state={
        open: false,
    }

    handleDialogOpen = () => {
        this.setState({ open: true});
    }

    handleCloseDialog = () => {
        this.setState({ open:false});
    }


    render() {
        const {open} = this.state
        return (
            <Card className="card card-room">
                <Typography className="card-header" component="div">
                    <span className="card-title">
                        Closing Room
                        <HelpIcon />
                    </span>
                    <Button title="Add closing Package" onClick={this.handleDialogOpen} variant="contained" className="btn btn-primary">
                        Add closing Package
                     </Button>
                </Typography>
               
                <CardContent className="card-body">
                <ChatBox/>
                    <Typography className="heading-small mrB15" gutterBottom>
                        Welcome to Closing Room
                    </Typography>
                    <Typography className="card-info mrB15" component="div">
                        The wizard will guide you through the process of notarizing closing documents. The closing Room Wizard will walk the Notary and signer through the process of signing and notarization the closing documents as well as gathering the way the signer is identified to be entered into the notaries electronic journal.
                    </Typography>
                    <div>
                        <Calendar/>
                    </div>
                </CardContent>
                <NewClosingPackageDialog isOpen={open} handleCloseDialog={this.handleCloseDialog}/>
            </Card>
        )
    }
}

export default ClosingRoom
