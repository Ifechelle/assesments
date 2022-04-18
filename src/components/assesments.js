import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getAnswers, getListOfQuestions, showResults } from "./../services/questions";
import store from "./../store";
import AssesmentQuestions from "./secure/assesment-questions";
import Post from "./after-assesment";
import "../index.css"

function Assesments() {

  const { user, questions, answers, results } = useState(store)

  useEffect(() => {
    showResults(user.uid.get())
    getListOfQuestions()
    getAnswers(user.uid.get())
  }, [])
  if (results.length !== 0) {
    return <Post />
  }

  return (

    <div className="text-center bg-gradient-to-t from-db via-brown to-beige text-blue">
      <AssesmentQuestions listOfQuestions={questions.get()} answersDictionary={answers.get()} />
    </div>
  );
}

export default Assesments;