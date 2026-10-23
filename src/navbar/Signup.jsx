
import React, { useState } from "react";
import "../navbarStyle/signup.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "./Login";

function Signup() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState("");

    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [conPassError, setConPassError] = useState("");

    const [successMsg, setSuccessMsg] = useState("");

    function validateName() {

        if (name.trim() === "") {
            setNameError("Name is required");
            return false;
        }

        setNameError("");
        return true;
    }

    const validatePhone = () => {

        if (phone.trim() === "") {
            setPhoneError("Mobile number is required");
            return false;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            setPhoneError("Enter a valid 10 digit mobile number");
            return false;
        }

        setPhoneError("");
        return true;
    };

    const validateAge = () => {

        if (age.trim() === "") {
            setAgeError("Age is required");
            return false;
        }

        if (age < 18) {
            setAgeError("Age must be 18 or above");
            return false;
        }

        setAgeError("");
        return true;
    };

    const validateEmail = () => {

        if (email.trim() === "") {
            setEmailError("Email is required");
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Enter a valid email address");
            return false;
        }

        setEmailError("");
        return true;
    };

    const validatePassword = () => {

        if (pass.trim() === "") {
            setPassError("Password is required");
            return false;
        }

        if (pass.length < 6) {
            setPassError("Password must be at least 6 characters");
            return false;
        }

        setPassError("");
        return true;
    };

    const validateConfirmPassword = () => {

        if (conPass.trim() === "") {
            setConPassError("Please confirm your password");
            return false;
        }

        if (pass !== conPass) {
            setConPassError("Password does not match");
            return false;
        }

        setConPassError("");
        return true;
    };

    const signUp = () => {

        setSuccessMsg("");

        const a = validateName();
        const b = validatePhone();
        const c = validateAge();
        const d = validateEmail();
        const e = validatePassword();
        const f = validateConfirmPassword();

        if (a && b && c && d && e && f) {

              const users = JSON.parse(
            localStorage.getItem("users") || "[]"
        );

        const alreadyExists = users.some(
            (user) => user.email === email.trim()
        );

        if (alreadyExists) {
            setEmailError("Email already registered");
            return;
        }

        // Naya user object
        const newUser = {
            name: name.trim(),
            phone: phone.trim(),
            age: Number(age),
            email: email.trim(),
            password: pass
        };

        users.push(newUser);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

            setSuccessMsg("✓ Registration successful!");

            setName("");
            setAge("");
            setPhone("");
            setEmail("");
            setPass("");
            setConPass("");
        }
    };

    return (
        <div className="container">

            <div className="signup-container">

                <div className="form-header">
                    <div className="logo">👤</div>
                    <h1>Create Account</h1>
                    <p>Sign up to get started with us</p>
                </div>

                {/* Name */}
                <div className="form-group">
                    <label>Full Name</label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {nameError && (
                        <small className="error">{nameError}</small>
                    )}
                </div>

                {/* Phone */}
                <div className="form-group">
                    <label>Mobile Number</label>

                    <input
                        type="text"
                        placeholder="Enter 10 digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    {phoneError && (
                        <small className="error">{phoneError}</small>
                    )}
                </div>

                {/* Age */}
                <div className="form-group">
                    <label>Age</label>

                    <input
                        type="number"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    {ageError && (
                        <small className="error">{ageError}</small>
                    )}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email Address</label>

                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {emailError && (
                        <small className="error">{emailError}</small>
                    )}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />

                    {passError && (
                        <small className="error">{passError}</small>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label>Confirm Password</label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={conPass}
                        onChange={(e) => setConPass(e.target.value)}
                    />

                    {conPassError && (
                        <small className="error">{conPassError}</small>
                    )}
                </div>

                <button className="signup-btn" onClick={signUp}>
                    Create Account
                </button>

                {successMsg && (
                    <div className="success">
                        {successMsg}
                    </div>
                )}
                
                <div className="login-text">
                    Already have an account?
                    <span><Link to='/login'> Login </Link></span>
                </div>

            </div>

        </div>
    );
}

export default Signup;
