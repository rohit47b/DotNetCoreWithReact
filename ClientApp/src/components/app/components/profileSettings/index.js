import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import React, { PureComponent } from 'react'
import Profile from './Profile'
import Products from './Products'
import Commissions from './Commissions'

class ProfileSettings extends PureComponent {
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
                        <Tab className="tab-nav-item" label="Profile" />
                        <Tab className="tab-nav-item" label="Products" />
                        <Tab className="tab-nav-item" label="Commissions" />
                    </Tabs>
                </Typography>
                <CardContent className="card-body">
                    {value === 0 && <Profile/>}
                    {value === 1 && <Products/>}
                    {value === 2 && <Commissions/>}
                </CardContent>
            </Card>
        )
    }
}

export default ProfileSettings
