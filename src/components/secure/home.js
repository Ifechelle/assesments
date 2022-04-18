import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import store from "../../store";

function Home() {
    const navigate = useNavigate()
    const AssesHandler = () => {
      navigate("/assesments")
    }
    return(
        <form className="text-center text-red-900 text-5xl code bg-gradient-to-t from-db to-beige h-screen">
        <br />
        <br />
        <div className="text-center text-6xl code">Are you ready to start you assesment?</div>
        <br />
        <br />
        <button>
        <div onClick={AssesHandler}> Start </div>
        </button>
        </form>
    )
}
export default Home