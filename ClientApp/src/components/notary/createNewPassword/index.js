import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core'

import { withRouter } from 'react-router-dom'

import CreateNewPassword from './CreateNewPassword'

import VerificationBackground from 'global/VerificationBackground'
import ErrorBoundary from 'global/ErrorBoundary'

class CreateNewPasswordMain extends PureComponent {

    render() {
        return (
            <div className="section-verify">
                <Grid container className="height-100">
                    <ErrorBoundary error="bg-error">
                        <VerificationBackground></VerificationBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                        <CreateNewPassword/>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
};

export default withRouter(CreateNewPasswordMain)
