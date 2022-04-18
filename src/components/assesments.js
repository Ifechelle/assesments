import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getAnswers, getListOfQuestions, showResults } from "./../services/questions";
import store from "./../store";
import AssesmentQuestions from "./secure/assesment-questions";
import Post from "./after-assesment";

function Assesments() {

  const { user, questions, answers, results } = useState(store)
  const uid = user.uid.get()
  useEffect(() => {
    
    if (results.length === 0) {
      getListOfQuestions()
      getAnswers(uid)
    }
  }, [])
  if (results.length !== 0) {
    showResults(uid)
    return <Post />
  }

  return (

    <div className="text-center bg-amber-400">
      <AssesmentQuestions listOfQuestions={questions.get()} answersDictionary={answers.get()} />
    </div>
  );
}

export default Assesments;