
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbarStyle/login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [successMsg, setSuccessMsg] = useState("");

    const validateEmail = () => {

        if (email.trim() === "") {
            setEmailError("Email is required");
            return false;
        }
       

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Enter a valid email address");
            return false;
        }

          const users = JSON.parse(
            localStorage.getItem("users") || "[]"
        );
        
        const findEmail = users.some(
            (user) => user.email === email.trim()
        );

        if(!findEmail){

            setEmailError("Email not Registered")
            return false;
        }

        setEmailError("");
        return true;
    };



    const validatePassword = () => {

        if (password.trim() === "") {
            setPasswordError("Password is required");
            return false;
        }

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            return false;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        
        const checkPass = users.some(
            (user) => user.password === password.trim() && user.email === email.trim()
        );

        if(!checkPass){

            setPasswordError("Wrong Password !!");
            return false;
        }
        setPasswordError("");
        return true;
    };



    const handleLogin = () => {

        setSuccessMsg("");

        const emailValid = validateEmail();
        const passwordValid = validatePassword();

        if (emailValid && passwordValid) {

            setSuccessMsg("✓ Login successful!");

            setEmail("");
            setPassword("");
        }
    };


    return (

        <div className="container">

            <div className="signup-container login-container">

                {/* Header */}
                <div className="form-header">

                    <div className="logo">
                        🔐
                    </div>

                    <h1>Welcome Back!</h1>

                    <p>
                        Login to your account
                    </p>

                </div>


            
                <div className="form-group">

                    <label>Email Address</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                            setSuccessMsg("");
                        }}
                    />

                    {emailError && (
                        <small className="error">
                            {emailError}
                        </small>
                    )}

                </div>


                {/* Password */}
                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError("");
                            setSuccessMsg("");
                        }}
                    />

                    {passwordError && (
                        <small className="error">
                            {passwordError}
                        </small>
                    )}

                </div>


                <div className="forgot-password">

                    <span>
                        Forgot Password?
                    </span>

                </div>

                <button
                    className="signup-btn"
                    onClick={handleLogin}
                >
                    Login
                </button>


                {successMsg && (
                    <div className="success">
                        {successMsg}
                    </div>
                )}


                <div className="login-text">

                    Don't have an account?

                    <Link to="/signup">
                        Sign Up
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;

