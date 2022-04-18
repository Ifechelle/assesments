// import App from '../App';
// import logo from '../logo.svg';
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/auth";
import { signupValidationSchema } from "../utils/form-utils";
import { FaSpinner } from 'react-icons/fa';
import "../index.css";


function SignUp() {
    const [processing, setProcessing] = useState(false)
    const [serverError, setServerError] = useState("")
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password1: "",
            password2: "",
            address: "",
            phoneNumber: "",
        },
        onSubmit: async (values) => {
            setProcessing(true)
            try {
                await
                    signup(values, onSuccess, onFailure)
                setProcessing(false)

            } catch (e) {
                console.log(e)
            }
            //call firebase to login
        },
        validationSchema: signupValidationSchema,
    });
    const navigate = useNavigate()
    const onSuccess = () => {
        navigate ("/Assesments")
    }
    const onFailure = (message) => {
        setServerError(message)
    }
    
    return (
        <div className='p-5 bg-gradient-to-t from-db via-brown to-beige text-center text-blue-400 text-base shadow-inner-lg h-screen'>
            <form onSubmit={formik.handleSubmit}>
                <header className=''>
                    <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Architects+Daughter&family=Festive&family=Gideon+Roman&family=Lobster+Two:ital@1&family=Shizuru&family=Syne+Tactile&display=swap" rel="stylesheet" />
                    </head>

                    <body className="body-font font-Akaya">
                        <div className="text-pink-300 text-3xl">
                            Sign Up
                        </div>
                        <br />
                        <div>
                            <label>First Name: </label>
                            <input id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} placeholder='Enter First Name' />
                        </div>
                        <div className="text-red-500 text-sm">
                            {formik.errors.firstName}
                        </div>
                        <br />
                        <div>
                            <label>Last Name: </label>
                            <input id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} placeholder='Enter Last Name' />
                        </div>
                        <div className="text-red-500">
                            {formik.errors.lastName}
                        </div>
                        <br />
                        <div>
                            <label>Email: </label>
                            <input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter Email' />
                        </div>
                        <div className="text-red-500">
                            {formik.errors.email}
                        </div>
                        <br />
                        <div>
                            <label>Username: </label>
                            <input id="userName" name="userName" onChange={formik.handleChange} value={formik.values.userName} placeholder='Enter Username' />
                        </div>
                        <div className="text-red-500">
                            {formik.errors.userName}
                        </div>
                        <br />
                        <div>
                            <label>Password: </label>
                            <input type="password" id="password1" name="password1" onChange={formik.handleChange} value={formik.values.password1} placeholder='Enter Password' />
                        </div>
                        <div className="text-red-500">
                            {formik.errors.password1}
                        </div>
                        <br />
                        <div>
                            <label> Confirm Password: </label>
                            <input type="password" id="password2" name="password2" onChange={formik.handleChange} value={formik.values.password2} placeholder='Re-enter Password' />
                            <div className="text-red-500">
                                {formik.errors.password2}
                            </div>
                        </div>
                        <br />
                        <div>
                            <label>Home Address: </label>
                            <input id="address" name="address" onChange={formik.handleChange} value={formik.values.address} placeholder='Enter Home Address' />
                            <div className="text-red-500">
                                {formik.errors.address}
                            </div>
                        </div>
                        <br />
                        <div>
                            <label>Phone Number: </label>
                            <input id="phoneNumber" name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber} placeholder='Enter Phone Number' />
                            <div className="text-red-500">
                                {formik.errors.phoneNumber}
                            </div>
                        </div>
                        <br />

                        <div className="">
                            <p>
                                <button onClick="" type="submit" className='rounded-full px-10 py-1 text-pink-300 bg-purple-100 text-row'>
                                    <input type="submit" name='submit' value="Sign Up" />
                                    {processing && <FaSpinner icon="spinner" className="spinner animate-spin" color="teal" size={35} />}
                                </button>
                            </p>
                        </div>
                        <div>{serverError}</div>
                    </body>
                </header>
            </form>
        </div>
    )

}

export default SignUp;