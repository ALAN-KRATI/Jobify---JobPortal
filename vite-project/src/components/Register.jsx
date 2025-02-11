import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(""); // Default role is 'user'
    const [profile, setProfile] = useState(""); // Profile can be empty initially
    const [error, setError] = useState(""); // For handling errors

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields before sending the request
        if (!name || !email || !contactNo || !password) {
            setError("All fields are required.");
            return;
        }

        // Send POST request to backend
        try {
            const response = await axios.post(
                "http://localhost:3452/user/signup", // Replace with your server URL
                { name, email, contactNo, password, role, profile },
                { withCredentials: true } // Allow cookies to be sent
            );
            console.log("User registered successfully:", response.data);

            // Clear the form fields after successful registration
            setName("");
            setEmail("");
            setContactNo("");
            setPassword("");
            setRole("");
            setProfile("");

        } catch (err) {
            console.error("Error during registration:", err.response ? err.response.data : err);
            setError(err.response ? err.response.data.message : "Error registering user");
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message if any */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Contact No:</label>
                    <input
                        type="text"
                        required
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label>Role:</label>
                    <input
                        type="text"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>

                <div>
                    <label>Profile (optional):</label>
                    <input
                        type="text"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
