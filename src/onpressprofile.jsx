import React, { useState } from "react";

function ProfileDropDown() {
    const navigate = useNavigate();
    const [showSignin, setShowSignin] = useState(false);

    const handleSigninClick = () => {
        console.log("Sign in button clicked");
    };

    return (
        <div>
            <div className="dropdown">
                <p className="dropdown-item">
                    <button className="buttons" onClick={handleSigninClick}>Sign in</button>
                </p>
                <p className="dropdown-item">Register</p>
                <p className="dropdown-item">Settings</p>
            </div>
            {showSignin && (
                <div className="testingdiv">
                    <div className="testingdiv-content">
                        <p>hi</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileDropDown;