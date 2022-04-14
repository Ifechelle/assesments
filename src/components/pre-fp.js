import React from "react";
import { useNavigate } from "react-router-dom";


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
            <div onClick={ForgotPassHandler}>Forgot Password</div>
            If you have reset you password please log in again.
            <div onClick={LoginHandler}> > </div>
        </div>
    )
}

export default PostPass