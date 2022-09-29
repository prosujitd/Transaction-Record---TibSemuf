import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate('/login');

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="text-white" to="/">
              {" "}
              Expensor
            </Link>
          </Typography>
          <Link className="text-white" to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link className="text-white" to="/register">
            <Button color="inherit">Register</Button>
          </Link>
            <Button onClick={logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
