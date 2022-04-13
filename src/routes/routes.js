import App from "../App";
import About from "../components/about";
import Assesments from "../components/assesments";
import Contacts from "../components/contact";
import ForgotPass from "../components/forgotpassword";
import Login from "../components/login";
import Profile from "../components/profile";
import Settings from "../components/settings";
import SignUp from "../components/signup";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/notfound";
import Home from "../components/secure/home";
import HomePage from "../components/homepage";
import RequireAuth from "../services/requireAuth";

const MyRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<App />} />
        <Route path="/StartPage" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/Assesments" element={<RequireAuth><Assesments /></RequireAuth>} />
        <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/Settings" element={<RequireAuth><Settings /></RequireAuth>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Forgotpassword" element={<ForgotPass />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default MyRoutes;