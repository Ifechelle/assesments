import React from "react";
import { useNavigate } from "react-router-dom";
import fontfamily from "../index.css"
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

    <div className="bg-rose-400 h-screen text-center text-4xl text-slate-400 code">
      <header>
        {/* <Heads /> */}
        <br />
        <div className="absolute left-0 top-0 h-36 w-26 bg-black-200">
          <img src="images/logo.jpg" alt="pic" width="90" height="90"></img>
          {/* <a href="https://www.jesushousebaltimore.org/"></a> */}
        </div>
        <div className="text-6xl text-slate-600" >
          Welcome!
        </div>
        <br />
        <br />
        <div onClick={SignUpHandler}>Sign Up</div>
        <br />
        <div onClick={LoginHandler}>Login</div>
        <br />
        <div onClick={AboutHandler}>About</div>

      </header>
    </div>
  );
}

export default StartPage;