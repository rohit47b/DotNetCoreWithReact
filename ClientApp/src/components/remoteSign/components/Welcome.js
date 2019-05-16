import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React, { PureComponent } from 'react';
import RightSideBar from './RightSideBar';


const styles = theme => ({
    [theme.breakpoints.down('sm')]: {
        mSignClosingInnerContainer: {
            padding: '40px 20px 0 20px',
        },
        heading: {
            marginBottom: '20%',
        }
    },
});


class RemoteSignWelcome extends PureComponent {
    render() {
        const { classes } = this.props;
        return (            
            <Grid container>                
                <Grid item xs={12} sm={12} md={7} lg={8} xl={9} className="pdB0 sign-closing-left-container">
                    <div className="sign-closing-wizard">
                        <div className={classes.mSignClosingInnerContainer + " sign-closing-inner-container"}>
                            <Card className={classes.card}>
                                <CardContent>
                                    {/* <ChatRoomMobileAction/> */}
                                <h1 className={classes.heading}>Welcome to Remote Sign Closing Wizard</h1>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={3} className="pdB0">
                    <RightSideBar isStart={true}/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(RemoteSignWelcome)
