import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signinImage from "../assets/signup.jpeg";

const Auth = () => {
    const [isSignup, setIsSignup] =
        useState(true);

    const handleChange = () => {};
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>
                        {isSignup
                            ? "Sing Up"
                            : "Sign In"}
                    </p>
                    <form onSubmit={() => {}}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                placeholder="username"
                                onChange={
                                    handleChange
                                }
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">
                                    Avatar URL
                                </label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={
                                    handleChange
                                }
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;
