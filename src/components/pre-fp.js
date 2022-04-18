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
        <div className="text-center text-blue text-4xl bg-gradient-to-t from-db to-beige h-screen">
            <br />
            <br />
            <br />
            <br />
            <br />
            The link has been sent to you email. If you can not find it click the link and try again. <br />
            <button>
            <div className="underline-offset-2 text-2xl text-beige rounded-full bg-gradient-to-t from-brown to-beige" onClick={ForgotPassHandler}> ⬅ Forgot Password</div>
            </button>
            <br />
            <br />
            <br />
            If you have reset you password log in again.<br />
            <button>
            <div className="underline-offset-2 text-2xl text-beige rounded-full bg-gradient-to-t from-brown to-beige" onClick={LoginHandler}> Continue ➡ </div>
            </button>
        
        </div>
    )
}

export default PostPass