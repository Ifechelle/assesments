import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { fpValidationSchema } from "../utils/form-utils";
import { forgotpassword } from "../services/auth";
import "../index.css"

function ForgotPass() {
    const [processing, setProcessing] = useState(false)
    const [serverError, setServerError] = useState("")
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: async (values) => {
            setProcessing(true)
            try {
                await
                    forgotpassword(values, onSuccess, onFailure)
                setProcessing(false)

            }
            catch (e) {
                console.log(e)
            }
        },
        validationSchema: fpValidationSchema
    });
    const navigate = useNavigate()
    const onSuccess = () => {
        navigate("/PostPass")
    }
    const onFailure = (message) => {
        setServerError(message)
    }
    return (
        <div className="text-center text-blue code bg-gradient-to-t from-brown to-beige h-screen">
            <header>
                <form onSubmit={formik.handleSubmit}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="text-5xl text-db">Reset Password</div>
                    <br />
                    <div className="text-3xl">
                        <label>Email: </label>
                        <input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter Email' />
                    </div>
                    <div className="text-red-500">
                        {formik.errors.email}
                    </div>
                    <br />
                    <div className="text-xl text-db">
                        <button className='text-blue-600 bg-black-200 rounded-full px-10 py-1'> <input type="submit" name='submit' value="Send" /> </button>
                    </div>
                    <div>{serverError}</div>
                </form>
            </header>
        </div>
    );

}

export default ForgotPass;