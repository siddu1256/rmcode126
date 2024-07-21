import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import Axios from "axios";
import bcrypt from "bcryptjs";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function SigninPop({ onClose }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        try {
            // Fetch user data from backend
            const response = await Axios.get(`http://localhost:3000/users?fullname=eq.${username}`);            const user = response.data[0]; // Assuming the username is unique

            if (user) {
                // Compare the provided password with the hashed password
                const isMatch = await bcrypt.compare(password, user.userpassword);

                if (isMatch) {
                    alert("Sign in successful!");
                    // Handle successful sign in (e.g., redirect to a new page, set user context, etc.)
                } else {
                    alert("Invalid password.");
                }
            } else {
                alert("User not found.");
            }
        } catch (error) {
            console.error("Error signing in:", error.response || error);
            alert("Error signing in.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="signin-popup">
                <h1>Sign In</h1>
                <CiUser className="profileicon"/>
                <div className="UserName">
                    <p>Username</p>
                    <input
                        type="text"
                        className="details"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="Password">
                    <p>Password</p>
                    <input
                        type="password"
                        className="details"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="close" onClick={handleSignIn}>Sign In</button>
                <button className="forgotpass">Forgot Password?</button>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse?.credential);
                        console.log(decoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </div>
    );
}

export default SigninPop;