import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import history from 'customHistory';
import React, { PureComponent } from 'react';

class ChatBox extends PureComponent {

    state={
        isClose:false
    }

    openChatBox=()=>{
        history.push('./closing-room/chat')
    }

    hadleCloseChatBox =()=>{
        this.setState({
            isClose:true
        })
    }

    render() {
        const {isClose} =this.state
        console.log("isClose ==> ",isClose)
        return (
            <Card  className={isClose === true ? "chat-box display-none" :"chat-box"}>
                {/* <Typography className="chat-box-header" component="div">
                    <span className="chat-box-title">Signer :Tom</span>
                    <span className="icon-action">
                        <RemoveIcon className="mrR10" />
                        <HighlightOff />
                    </span>
                </Typography>
                <Typography className="group-chat" component="div">
                    <span className="group-chat-dropdown">Group Chat <KeyboardArrowDownIcon className="mrL10" /></span>
                    <span className="group-chat-user">03 <PersonIcon className="mrL5" /></span>
                </Typography> */}

                <span onClick={this.hadleCloseChatBox}>
                    <i className="fa fa-times-circle-o close-chat" aria-hidden="true"></i>
                </span>
                
                <CardContent className="chat-body" onClick={()=>this.openChatBox()}>
                    <Typography className="chat-comment" component="div">
                        <div className="chat-info">                            
                            <div className="chat-media">
                                {/* <PersonIcon className="user-icon" /> */}
                                <div className="chat-user-icon">
                                    <i className="fa fa-question" aria-hidden="true"></i>
                                </div>
                                <div className="chat-content">
                                    <div className="chat-user">Kendall Sample</div>
                                    <div className="chat-desc">Test message on chat</div>
                                </div>
                            </div>
                            <div className="chat-time">Today, 4.30</div>
                        </div>
                    </Typography>
                    {/* <Typography className="chat-comment" component="div">
                        <div className="chat-info">
                            <div className="chat-media">
                                <PersonIcon className="user-icon" />
                                <div className="chat-content">
                                    <div className="chat-user">John Hancock</div>
                                    <div className="chat-desc">Mr, Kendall <br /> Welcome to closing document</div>
                                </div>
                            </div>
                            <div className="chat-time">Today, 4.29</div>
                        </div>
                    </Typography> */}
                </CardContent>
                {/* <CardActions className="chat-footer">
                    <TextField
                        id="simple-start-adornment"
                        InputProps={{
                            startAdornment: <InputAdornment className="icon-emoji" position="start"><InsertEmoticon/></InputAdornment>,
                        }}
                        className="chat-field"
                        placeholder="Type your message"
                    />
                    <a title="Forward Message" className="forward-icon" href="javascript:void(0)">
                        <ArrowForward/>
                    </a>
                </CardActions> */}
            </Card>
        )
    }
}

export default ChatBox
