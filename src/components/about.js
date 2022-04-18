import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./secure/header";
import "../index.css"

function About() {
  return (
    <div className="text-center bg-gradient-to-t from-db via-brown to-beige text-3xl h-screen">
      <header>
        <Header />
        <br />
        <br />
        
        <br />
        <br />
        <div >
          <p>
            JHB (Jesus House Baltimore):
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

          </p>
        </div>
        <div>

        </div>
      </header>
    </div>
  );
}

export default About;