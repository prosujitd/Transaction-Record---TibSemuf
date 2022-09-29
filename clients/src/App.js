import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "./components/AppBar.js";
import TransactionForm from "./components/TransactionForm.js";
import TransactionsList from "./components/TransactionsList.js";
import { Container } from "@mui/material";

import { Outlet } from "react-router-dom";

function App() {
 
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;
