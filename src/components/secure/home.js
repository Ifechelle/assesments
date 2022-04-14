import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import store from "../../store";

function Home() {
    const navigate = useNavigate()
    const AssesHandler = () => {
      navigate("/assesments")
    }
    return(
        <form className="text-center text-5xl code">
        <br />
        <br />
        <div className="text-center text-6xl code">Are you ready to start you assesment?</div>
        <br />
        <br />
        <div onClick={AssesHandler}> Start </div>
        </form>
    )
}
export default Home