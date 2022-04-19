import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./secure/header";
import "../index.css"

function About() {
  return (
    <div className="text-center bg-gradient-to-t from-brown to-beige text-2xl text-red-900 h-screen code">
      <header>
        <Header />
        <br />
        <br />
        
        <br />
        <br />
        <div >
          <p>
            <div className="text-4xl">
            JHB (Jesus House Baltimore):
            </div>
            <br />
            Where the Word Is Taught With Integrity.
            <br />
            Challanging People & Maximizing Potential
            <br />
            JHB is about bringing opportunity to the people in and out of our community. 
            <br />
            Everyone is welcome, so please come on in.
            <br />
            This webpage is for those interested in the 2023 coding class.
            <br />
            If that peaks your intrest then take your luck at this test, see what you get.
            <div className=" absolute right-inset-x-0 bottom-0 h-16">
            <img src="images/Jesushouse.jpg" alt="pic" width="100" height="10"></img>
            </div>
          </p>
        </div>
        <div>

        </div>
      </header>
    </div>
  );
}

export default About;