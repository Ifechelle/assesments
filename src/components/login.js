import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/form-utils";
import { login } from "../services/auth";
import "../index.css";

function Login() {
  const [processing, setProcessing] = useState(false)
  const [serverError, setServerError] = useState("")
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setProcessing(true)
      try {
        await
          login(values, onSuccess, onFailure)
        setProcessing(false)

      } catch(e) {
        console.log(e)
      }
      //call firebase to login
    },
    validationSchema: loginValidationSchema,
  });
  const onSuccess = () => {
    navigate ("/Home")
  }
  const onFailure = (message) => {
    setServerError(message)
  }

  const navigate = useNavigate()
  const ForgotPassHandler = () => {
    navigate("/forgotpassword")
  }
  const SignUpHandler = () => {
    navigate("/SignUp")
  }
  const ContactHandler = () => {
    navigate("/contact")
  }
  return (
    <div className="text-center bg-gradient-to-t from-db via-brown to-beige code text-gray-200 h-screen">
      <header>

        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Architects+Daughter&family=Festive&family=Gideon+Roman&family=Lobster+Two:ital@1&family=Shizuru&family=Syne+Tactile&display=swap" rel="stylesheet" />
        </head>
        <body className="code text-sky-700">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="border-1 text-2xl">

            <div className="text-7xl">Login</div>
            <br />
            <form onSubmit={formik.handleSubmit}>
            <div>
              <label>Email: </label>
              <input className="text-blue" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter Email' />
              
            </div>
            <div className="text-red-500 text-xl">
              {formik.errors.email}
            </div>
            <br />
            <div>
              <label>Password: </label>
              <input className="text-blue" type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder='Enter Password' />
            </div>
            <div className="text-red-500 text-xl">
              {formik.errors.password}
            </div>

            <br />
            <div>
              <button className='text-beige rounded-full px-10 bg-brown py-1 shadow-inner'> <input type="submit" name='submit' value="Login" /> </button>
            </div>
            <br />
            <div className="text-blue-200" onClick={ForgotPassHandler}>Forgot Password</div>
            <br />
            <div className="text-blue-200" onClick={SignUpHandler}>Sign Up</div>
            <br />
            <div onClick={ContactHandler}>Contact Us</div>
            </form>
          </div>
          <div>{serverError}</div>
          
        </body>
      </header>
    </div>
  );
}

export default Login;