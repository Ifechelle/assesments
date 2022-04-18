import store from "./../store";
import { useState } from "@hookstate/core";
import "../index.css"


function Post() {
  const { user, results } = useState(store)
  const uid = user.uid.get()


  return (
    <div className="text-center text-blue text-3xl bg-gradient-to-t from-brown to-beige h-screen">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-center text-red-900">You have completed your test. <br />
        If you are unsatisfied with your results email "tola.isesanya@gmail.com". <br />
        We will do our best to get back with you for a retry <br/>
        To see your score refresh and log in again
        </div>
      <br />
      Number of Correct: {results[0]?.numberOfCorrect?.get()}
      <br />
      Number of Incorrect: {results[0]?.numberOfIncorrect?.get()}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     <div> To leave use the sidebar</div>
     </div>
  )
};

export default Post;