import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    // Local state for the email, password, and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle email and password input change
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Make POST request to the login route
        const response = await axios.post(
            "http://localhost:3452/user/login", // Replace with your server URL
            { email,password},
            { withCredentials: true } // Allow cookies to be sent
        );

        
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging In...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
