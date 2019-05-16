import React from 'react'
import Grid from '@material-ui/core/Grid'


const VerificationBackground = (props) => {
    return (
            <Grid item xs={12} sm={12} md={6} className="verify-bg flex-col-6">
                <img  alt="simplySecureSign" src={"assets/images/logo-onboarding.png"}/>
            </Grid>
    )
}
export default VerificationBackground;