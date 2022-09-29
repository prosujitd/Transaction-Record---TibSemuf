import React, { useEffect } from "react";
import Home from "../pages/Home";
import { Navigate, redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

const CheckAuth = ({ children }) => {
    
  const token = Cookies.get("token");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUser() {
    setIsLoading(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
        redirect('/login');
    }
    setIsLoading(false);

  }

  useEffect(() => {fetchUser()}, []);

  if(isLoading){
    return <p>Loading....</p>
  }

  return children;
  //   return isAuthenticated ? children : <Navigate to={"/login"} replace={true} />;
};

export default CheckAuth;
