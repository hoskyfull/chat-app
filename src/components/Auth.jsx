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
                    <p>
                        {isSignup
                            ? "Sing Up"
                            : "Sign In"}
                    </p>
                    <form onSubmit={}>
                        {isSignup}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;
