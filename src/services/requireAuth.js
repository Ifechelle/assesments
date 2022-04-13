import { useState } from "@hookstate/core";
import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import Header from "../components/secure/header";
import store from "../store";

export default function RequireAuth({ children, ...rest }) {
  const { user } = useState(store)
  let location = useLocation();

  try {
    if (!user.isAuthenticated.get()) {
      return <Navigate to="/Login" state={{ from: location }} />;
    }
    return (
      <>
        <div><Header /></div>
        {children}
      </>
    )
  } catch (e) {
    console.log(e)
    return null;
  }
}