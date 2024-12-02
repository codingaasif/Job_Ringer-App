import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email: "",
        password: ""
    });

    const validationField = () => {
        let isValid = true;
        const newError = { email: "", password: "" };

        if (!formData.email) {
            newError.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newError.email = "Invalid email format.";
            isValid = false;
        }

        if (!formData.password) {
            newError.password = "Password is required.";
            isValid = false;
        } else if (formData.password.length < 6) {
            newError.password = "Password must be at least 6 characters long.";
            isValid = false;
        }

        setError(newError);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationField()) {
            console.log("Login Details:", formData);
            setFormData({ email: "", password: "" });
            setError({ email: "", password: "" });
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit} noValidate>
                <h2 className="login-title">Welcome Back!</h2>
                <p className="login-subtitle">Login to your account</p>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    {error.email && <p className="error-message">{error.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    {error.password && <p className="error-message">{error.password}</p>}
                </div>
                <button type="submit" className="login-btn">
                    Login
                </button>
                <p className="login-footer">
                    Don't have an account? <a href="/registration">Sign up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
