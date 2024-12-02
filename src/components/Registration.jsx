import React, { useState } from "react";
import "../styles/Registration.css";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
    });

    const validateField = (name, value) => {
        let errorMessage = "";

        if (name === "name" && value.trim() === "") {
            errorMessage = "Name is required";
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.trim() === "") {
                errorMessage = "Email is required";
            } else if (!emailRegex.test(value)) {
                errorMessage = "Invalid email format";
            }
        } else if (name === "password" && value.trim() === "") {
            errorMessage = "Password is required";
        }

        setError((prev) => ({
            ...prev,
            [name]: errorMessage,
        }));

        return errorMessage === "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate the field on change
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateField("name", formData.name);
        const isEmailValid = validateField("email", formData.email);
        const isPasswordValid = validateField("password", formData.password);

        if (isNameValid && isEmailValid && isPasswordValid) {
            console.log("Registration Successful:", formData);

            setFormData({ name: "", email: "", password: "" });
            setError({ name: "", email: "", password: "" });
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit} noValidate>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    <p style={{ color: "red" }}>{error.name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    <p style={{ color: "red" }}>{error.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    <p style={{ color: "red" }}>{error.password}</p>
                </div>
                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Registration;
