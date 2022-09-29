import * as React from "react";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";
import { create } from "@mui/material/styles/createTransitions";

const inititalState = {
  amount: 0,
  description: "",
  date: new Date(),
};

export default function TransactionForm({ fetchTransaction, editTransaction }) {
  const [form, setForm] = useState(inititalState);

  useEffect(() => {
    if (editTransaction.amount !== undefined) setForm(editTransaction);
  }, [editTransaction]);

  const create = async() => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`, {
        method: "POST",
        body: JSON.stringify(form),
        // body: form,
        headers: {
          "Content-Type": "application/json",
        },
      });
      reload(res);
      
  }

  const update = async() => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction/${editTransaction._id}`, {
        method: "PATCH",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      reload(res);
      
  }

  const reload = (res) =>{
    if (res.ok) {
        setForm(inititalState);
        fetchTransaction();
      }
      return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = editTransaction.amount === undefined ? create() : update();

    reload(res);

    
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDate = (newValue) => {
    setForm({ ...form, date: newValue });
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">Add new Transaction</Typography>
          <TextField
            onChange={handleInput}
            size="small"
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            name="amount"
            variant="outlined"
            value={form.amount}
          />
          <TextField
            size="small"
            onChange={handleInput}
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            name="description"
            label="Description"
            variant="outlined"
            value={form.description}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              name="date"
              value={form.date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField size="small" sx={{ marginRight: 5 }} {...params} />
              )}
            />
          </LocalizationProvider>
          {editTransaction.amount !== undefined && (
            <Button type="submit" variant="contained">
              Update
            </Button>
          )}

          {editTransaction.amount === undefined && (
            <Button type="submit" variant="contained">
              Submit
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
