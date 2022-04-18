import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { submitAnswers } from "../../services/questions";
import { useState as useGlobalState } from "@hookstate/core";
import store from "../../store";

const AssesmentQuestions = ({ listOfQuestions, answersDictionary }) => {
    const { user } = useGlobalState(store)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const [previousAnswers, setPreviousAnswers] = useState({})
    const [processing, setProcessing] = useState(false)
    const q = listOfQuestions[currentQuestionIndex]
    const questionId = q?.id
    const selectedAnswers = answersDictionary[questionId]
    const navigate = useNavigate()
    console.log(answersDictionary[questionId], "xyz")
    useEffect(() => {
        setAnswers(selectedAnswers)
    }, [selectedAnswers])
    const formik = useFormik({

        initialValues: {

        },
        onSubmit: async (values) => {
            setProcessing(true)
            submitAnswers(answers, onSuccess, true)
        },
    })
    const questionsIndex = currentQuestionIndex
    const next = () => {
        console.log(answers, '+++')
        submitAnswers(answers, onNextSuccess)
    }
    const previous = () => {
        setAnswers(previousAnswers)
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
    const onNextSuccess = (answers) => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setPreviousAnswers(answers)
        //setAnswers({answer: ''})
    }
    const onSuccess = () => {
        navigate("/Post")
    }
    let buttonHtml;
    const nextButton = <button className=" m-3 bg-white hover:bg-blue-700 font-bold text-cyan-300 py-2 px-4 md: w-1/6 rounded-full place-items-center" onClick={next} type="button"> Next</button>
    const previousButton = <button className="m-3 bg-white hover:bg-blue-700 font-bold text-cyan-300 py-2 px-4 md: w-1/6 rounded-full place-items-center" type="button" onClick={previous}> Previous</button>
    if (questionsIndex === 0) {
        buttonHtml = (
            <>
                {nextButton}
            </>
        );
    } else if (questionsIndex === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                {previousButton}
                <button className=" m-3 bg-white hover:bg-blue-700 font-bold text-cyan-300 py-2 px-4 md: w-1/6 rounded-full place-items-center" type="submit"> Submit</button>
            </>
        );
    } else {
        buttonHtml = (
            <>
                {previousButton}
                {nextButton}
            </>
        )
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="grid grid rows-3 w-full mx-auto text-center text-5xl text-white bg-gradient-to-r from-cyan-300  to-blue-400 h-screen font-BebasNeue">

                <>
                    <div key={`question${questionsIndex}`}>
                        <div>Question {questionsIndex + 1}</div>
                        <div>{q?.question}</div>
                        <div>{q?.type === "multiple-choice" ?
                            <div>{q?.options.map((o, optionsIndex) => {
                                return (
                                    <div key={`options${optionsIndex}`}>
                                        <input
                                            type="radio"
                                            id={`${q.id}-option${optionsIndex}`}
                                            name={`${q.id}-option${optionsIndex}`}
                                            onChange={() => {
                                                formik.setFieldValue(q?.id, o)
                                                setAnswers({ ...answers, answer: o, questionId: q?.id, uid: user.uid.get() })
                                            }
                                            }
                                            value={o}
                                            checked={formik.values[q?.id] === o || selectedAnswers?.answer === o}
                                        />
                                        {o}
                                    </div>
                                )
                            })}</div>
                            :

                            <div>
                                Answer:<input value={answers?.answer} onChange={(e) => {
                                    setAnswers({ ...answers, answer: e.target.value, questionId: q.id, uid: user.uid.get() })
                                    console.log(answers, '---')
                                }} className='text-beige mb-5 border-b-2 border-black bg-db md:w-1/2 h-10 py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' id="Answer" name="Answer" placeholder='Enter Text' />
                            </div>
                        }</div>


                    </div>

                    <div>
                        {buttonHtml}
                    </div>
                </>
            </div>
        </form>
    )
}

export default AssesmentQuestions;