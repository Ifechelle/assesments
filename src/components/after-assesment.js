import store from "./../store";
import { useState } from "@hookstate/core";
import { getResults, showResults } from "./../services/questions";
import {useEffect} from 'react'


function Post() {
    const { user, results } = useState(store)
    const uid = user.uid.get()
    // useEffect(() => {
    //     getResults(uid)
    //     if (results.length !== 0) {
    //       showResults(uid)
    //     }
    //   }, [])
     
  useEffect(() => {
    showResults(uid.results);
}, []);


    return(
        <div className="text-center">

        <div className="text-center">You have completed your test. <br/>
        While this page is still under development if you would like to know your results then email "tola.isesanya@gmail.com"<br />
        If you are unsatisfied with your results then please email back . <br />
        We will try to get back to you in 2-3 buisness days to and if you would like to know what you got wrong feel free to include so.</div>
      <br />
        {/* Number of Correct: {results.numberOfCorrect}
        <br /> 
        Number of Incorrect: {results.numberOfIncorrect} */}

        </div>
        
    )
};

export default Post;