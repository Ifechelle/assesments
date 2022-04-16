// import { useNavigate } from "react-router-dom";
import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getAnswers, getListOfQuestions } from "./../services/questions";
import store from "./../store";
import AssesmentQuestions from "./secure/assesment-questions";

function Assesments() {
  const { user, questions, answers } = useState(store)

  useEffect(() => {
      getListOfQuestions()
      getAnswers(user.userid.get())
  }, [])
  return (
    
      <div className="text-center bg-amber-400">
        <AssesmentQuestions listOfQuestions={questions.get()} answersDictionary={answers.get()} />
      </div>
  );
  }

export default Assesments;