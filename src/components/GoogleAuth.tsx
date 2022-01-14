import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import AuthService from './../services/Auth';

function GoogleAuth() {
    const responseGoogle = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        let tokenId;
        if ("tokenId" in res) { tokenId = res.tokenId; }        
        if (tokenId) {AuthService.googleAuth(tokenId);}
    }

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID || ""}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default GoogleAuth;