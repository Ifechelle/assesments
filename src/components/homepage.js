import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"
// import Heads from "./secure/heads";

function StartPage() {
  const navigate = useNavigate()
  const SignUpHandler = () => {
    navigate("/signup")
  }
  const LoginHandler = () => {
    navigate("/login")
  }
  const AboutHandler = () => {
    navigate("/about")
  }
  
  return (

    <div className="bg-gradient-to-t from-db via-brown to-beige h-screen text-center text-4xl text-blue code">
      <header>
        {/* <Heads /> */}
        <br />
        <div className="absolute left-0 top-0 h-36 w-26 ">
          <img src="images/logo.jpg" alt="pic" width="90" height="90"></img>
          {/* <a href="https://www.jesushousebaltimore.org/"></a> */}
        </div>
        <div className="text-6xl text-blue " >
          Welcome!
        </div>
        <br />
        <br />
        <div onClick={SignUpHandler}>Sign Up</div>
        <br />
        <div onClick={LoginHandler}>Login</div>
        <br />
        <div onClick={AboutHandler}>About</div>
        <br />

      </header>
    </div>
  );
}

export default StartPage;