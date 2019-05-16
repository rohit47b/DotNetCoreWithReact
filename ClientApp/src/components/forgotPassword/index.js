import React, { PureComponent } from 'react'

import { Grid } from '@material-ui/core'

import ForgotPassword from './ForgotPassword'

import VerificationBackground from 'global/VerificationBackground'
import ErrorBoundary from 'global/ErrorBoundary'

class ForgotPasswordPage extends PureComponent {

    render() {
        return (
            <div className="section-login">
                <Grid container spacing={24} className="quad-container">
                    <ErrorBoundary error="bg-error">
                        <VerificationBackground></VerificationBackground>
                    </ErrorBoundary>
                    <ErrorBoundary error="login-error">
                        <ForgotPassword></ForgotPassword>
                    </ErrorBoundary>
                </Grid>
            </div>
        )
    }
}

export default ForgotPasswordPage;
