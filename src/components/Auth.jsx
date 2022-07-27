import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signinImage from "../assets/signup.jpeg";

const Auth = () => {
    const [isSignup, setIsSignup] =
        useState(false);
    return (
        <div className="auth__from-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{}</p>
                </div>
            </div>
            Auth
        </div>
    );
};

export default Auth;
