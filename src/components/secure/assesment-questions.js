import { useFormik } from "formik"
import { FaSpinner } from 'react-icons/fa'
import { useState, useEffect } from "react"
import { useState as useGlobalState } from "@hookstate/core"
import store from "../../store"
import { submitAnswers } from "../../services/questions"

const AssesmentQuestions = ({ listOfQuestions, answersDictionary }) => {
    const { user } = useGlobalState(store)
    const [currentQuestionsIndex, setCurrentQuestionsIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const [previousAnswers, setPreviousAnswers] = useState({})
    const [processing, setProcessing] = useState(false)
    const q = listOfQuestions[currentQuestionsIndex]
    const questionId = q?.id
    useEffect(() => {
        setAnswers(answersDictionary[q?.id])
        console.log(answersDictionary, "***")
    },[questionId])
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: async (values) => {
            setProcessing(false)
            console.log(answers, "---")
            submitAnswers(answers, onSubmitSuccess)
        },
    })
    const questionsIndex = currentQuestionsIndex
    console.log(questionsIndex)
    const next = () => {
        console.log(answers)
        submitAnswers(answers, onSubmitSuccess)
    }
    const previous = () => {
        setCurrentQuestionsIndex(currentQuestionsIndex - 1);
        setAnswers(previousAnswers)
        console.log(previousAnswers)
    }
    const onSubmitSuccess = (answers) => {
        setCurrentQuestionsIndex(currentQuestionsIndex + 1);
        console.log("+++",)
        setPreviousAnswers(answers)
    }
    let buttonHtml;
    if (questionsIndex === 0) {
        buttonHtml = (
            <>
                <input onClick={next} type="button" value="Next" />
            </>
        );
    } else if (questionsIndex === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                <input onClick={previous} type="button" value="Previous" />
                <input type="submit" value="Submit" />
            </>
        );
    } else {
        <>
            <input onClick={next} type="button" value="Next" />
        </>;
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="h-screen">
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
                                            formik.setFieldValue(q.id, o)
                                            setAnswers({ answer: o, questionId, uid: user.uid.get() })
                                        }
                                        }
                                        value={o}
                                        checked={formik.values[q.id] === o}
                                    />
                                    {o}
                                </div>
                            )
                        })}
                        </div>
                        :
                        <div>
                            <input onChange={(e) => { setAnswers({ answer: e.target.value, questionId, uid: user.uid.get() }) }} id="Answer" name="Answer" placeholder='Enter Answer' value={answers?.answer} />
                        </div>
                    }</div>
                </div>
                <br />
                <div>{buttonHtml}</div>
                {processing && <FaSpinner icon="spinner" className="spinner animate-spin" color="teal" size={35} />}
            </div>
        </form>
    )
}
export default AssesmentQuestions