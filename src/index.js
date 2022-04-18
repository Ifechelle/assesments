import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import SignUp from './components/signup';
import About from './components/about';
import Assesments from './components/assesments';
import Login from './components/login';
import Profile from './components/profile';
import Settings from './components/settings';
import Contacts from './components/contact';
import ForgotPass from './components/forgotpassword';
import RequireAuth from "./services/requireAuth";
import HomePage from './components/homepage';
import MyRoutes from './routes/routes'
import Results from './components/results'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
