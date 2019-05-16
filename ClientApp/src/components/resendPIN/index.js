import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core'

import { withRouter } from 'react-router-dom'

import ResendPIN from './ResendPIN'

import VerificationBackground from 'global/VerificationBackground'
import ErrorBoundary from 'global/ErrorBoundary'

class ResendPINPage extends PureComponent {

    render() {
        return (
            <div className="section-verify">
                <Grid container className="height-100">
                    <ErrorBoundary error="bg-error">
                        <VerificationBackground></VerificationBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                        <ResendPIN></ResendPIN>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
};

export default withRouter(ResendPINPage);
