import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "./components/AppBar.js";
import TransactionForm from "./components/TransactionForm.js";
import TransactionsList from "./components/TransactionsList.js";
import { Container } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import { Outlet } from "react-router-dom";
import { getUser } from "./store/auth.js";

function App() {
  const auth = useSelector((state)=> state.auth);
  const dispatch = useDispatch();

  console.log(auth);

  useEffect(()=>{
    dispatch(getUser());
  },[])
 
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;
