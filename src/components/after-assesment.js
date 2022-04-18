import store from "./../store";
import { useState } from "@hookstate/core";
import "../index.css"


function Post() {
  const { user, results } = useState(store)
  const uid = user.uid.get()


  return (
    <div className="text-center ">

      <div className="text-center ">You have completed your test. <br />
        While this page is still under development if you would like to know your results then email "tola.isesanya@gmail.com"<br />
        If you are unsatisfied with your results then please email back . <br />
        We will try to get back to you in 2-3 business  days to and if you would like to know what you got wrong feel free to include so.</div>
      <br />
      Number of Correct: {results[0]?.numberOfCorrect?.get()}
      <br />
      Number of Incorrect: {results[0]?.numberOfIncorrect?.get()}
    </div>

  )
};

export default Post;