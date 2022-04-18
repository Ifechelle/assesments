import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"


function PostPass() {
    const navigate = useNavigate()
    const ForgotPassHandler = () => {
        navigate("/forgotpassword")
    }
    const LoginHandler = () => {
        navigate("/login")
    }

    return (
        <div>
            The link has been sent to you email. If you can not find it click the link and try again.
            <div className="underline-offset-2  bg-gradient-to-t from-db via-brown to-beige" onClick={ForgotPassHandler}>Forgot Password</div>
            If you have reset you password please log in again.
            <div className="underline-offset-2  bg-gradient-to-t from-db via-brown to-beige" onClick={LoginHandler}> > </div>
        </div>
    )
}

export default PostPass