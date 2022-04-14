import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/form-utils";
import { login } from "../services/auth";

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
  return (
    <div className="text-center bg-rose-400 h-screen">
      <header>

        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Architects+Daughter&family=Festive&family=Gideon+Roman&family=Lobster+Two:ital@1&family=Shizuru&family=Syne+Tactile&display=swap" rel="stylesheet" />
        </head>
        <body className="text-Architect ">
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
              <input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter Email' />
              
            </div>
            <div className="text-red-500 text-xl">
              {formik.errors.email}
            </div>
            <br />
            <div>
              <label>Password: </label>
              <input id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder='Enter Password' />
            </div>
            <div className="text-red-500 text-xl">
              {formik.errors.password}
            </div>

            <br />
            <div>
              <button className='text-blue-600 bg-black-200 rounded-full px-10 py-1 shadow-inner'> <input type="submit" name='submit' value="Login" /> </button>
            </div>

            <br />
            <div className="" onClick={ForgotPassHandler}>Forgot Password</div>
            <br />
            <div className="" onClick={SignUpHandler}>Sign Up</div>
            </form>
          </div>
          <div>{serverError}</div>
          
        </body>
      </header>
    </div>
  );
}

export default Login;