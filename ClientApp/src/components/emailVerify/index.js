import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core'

import { withRouter } from 'react-router-dom'

import EmailVerify from './EmailVerify'

import VerificationBackground from 'global/VerificationBackground'
import ErrorBoundary from 'global/ErrorBoundary'

class EmailVerifyPage extends PureComponent {

    render() {
        return (
            <div className="section-verify">
                <Grid container className="height-100 flex-container">
                    <ErrorBoundary error="bg-error">
                        <VerificationBackground></VerificationBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                        <EmailVerify></EmailVerify>
                    </ErrorBoundary>
                </Grid>
            </div>

        )
    }
};

export default withRouter(EmailVerifyPage);
