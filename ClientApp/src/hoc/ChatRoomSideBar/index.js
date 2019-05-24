import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import history from 'customHistory'

const styles = {
    input: {
        marginLeft: 8,
        flex: 1,
        width: "90%"
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

class ChatRoomSideBar extends PureComponent {

    state = {
        dense: false,
        secondary: false,
        expanded: null,
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { dense, secondary, expanded } = this.state;

        return (
            <div>
                <List className="chat-list-desktop chat-list" dense={dense}>
                    <ExpansionPanel className="expand-list" expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary className="expand-summary-list">
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                 <ListItemSecondaryAction>
                                    <div className="count">2</div>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="expand-list-details">

                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                                        KS
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Kendall Sample"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                 <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                              
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Ajay Soni"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                                        JS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="John Smith"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Rebecca Thomas"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="expand-list" expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary className="expand-summary-list">
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                 <ListItemSecondaryAction>
                                    <div className="count">2</div>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="expand-list-details">

                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                                        KS
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Kendall Sample"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <div className="count">2</div>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Ajay Soni"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                                        JS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="John Smith"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Rebecca Thomas"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="expand-list" expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                        <ExpansionPanelSummary className="expand-summary-list">
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="expand-list-details">

                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                                        KS
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Kendall Sample"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Ajay Soni"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                                        JS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="John Smith"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Rebecca Thomas"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </List>

                <List className="chat-list-mobile chat-list" dense={dense}>
                    <ExpansionPanel className="expand-list" expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary className="expand-summary-list">
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="AB Document"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                <div className="count">2</div>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="expand-list-details">
                            <ListItem className="list-item" onClick={() => history.push('/app/notary/closing-room/chat/messages')}>
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                                        KS
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Kendall Sample"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Ajay Soni"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                                        JS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="John Smith"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Rebecca Thomas"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="expand-list" expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary className="expand-summary-list">
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <div className="count">2</div>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="expand-list-details">

                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                                        KS
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Kendall Sample"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                               <ListItemSecondaryAction>
                                    <div className="count">2</div>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Ajay Soni"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                                        JS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="John Smith"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Rebecca Thomas"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="expand-list" expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                        <ExpansionPanelSummary className="expand-summary-list">
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar blue-circle">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="expand-list-details">

                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-blue-circle">
                                        KS
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Kendall Sample"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                               <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-green-circle">
                                        AJ
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Ajay Soni"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar blue-circle">
                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Document Name"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-purple-circle">
                                        JS
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="John Smith"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="list-item">
                                <ListItemAvatar className="list-avatar">
                                    <Avatar aria-label="Recipe" className="list-avatar lt-brown-circle">
                                        RT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    className="title"
                                    primary="Rebecca Thomas"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </List>
            </div>
        )
    }
}


ChatRoomSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatRoomSideBar);