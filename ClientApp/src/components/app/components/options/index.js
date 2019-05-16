import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { PureComponent } from 'react';
import  NotaryDefault from './NotaryDefault'
import  IDTypes from './IDTypes'
import  NotaryCharge from './NotaryCharge'



class Options extends PureComponent {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state
        return (
            <Card className="card card-room card-tab">
                <Typography className="card-header" component="div">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        className="tab-nav"
                    >
                        <Tab className="tab-nav-item" label="Notary Defaults" />
                        <Tab className="tab-nav-item" label="ID Types" />
                        <Tab className="tab-nav-item" label="Notary Charges" />
                    </Tabs>
                </Typography>
                <CardContent className="card-body">
                    {value === 0 && <NotaryDefault/>}
                    {value === 1 && <IDTypes/>}
                    {value === 2 && <NotaryCharge/>}
                </CardContent>
            </Card>
        )
    }
}

export default Options
