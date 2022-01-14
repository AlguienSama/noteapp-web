import React from "react";
import Login from "../components/Login";
import Register from './../components/Register';
import GoogleAuth from '../components/GoogleAuth';

type SignProps = {
    form: "LOGIN" | "REGISTER"
}

function SignIn({form}: SignProps) {
    const formRender = form === "REGISTER" ? <Register /> : <Login />;

    return (
        <div className="container">
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            {formRender}
            <div>
                Google
                <GoogleAuth />
            </div>
        </div>
    )
}

export default SignIn;