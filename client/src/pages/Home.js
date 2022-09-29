import { useEffect, useState } from "react";
import TransactionForm from "./../components/TransactionForm.js";
import TransactionsList from "./../components/TransactionsList.js";
import { Container } from "@mui/material";
import Cookies from "js-cookie";

function Home() {
  const [transaction, setTransaction] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    const token = Cookies.get('token');
    console.log(token);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    const { data } = await res.json();
    setTransaction(data);
  };

  return (
    <>
      <Container>
        <TransactionForm
          editTransaction={editTransaction}
          fetchTransaction={fetchTransaction}
        />
        <TransactionsList
          setEditTransaction={setEditTransaction}
          transactions={transaction}
          fetchTransactions={fetchTransaction}
        />
      </Container>
    </>
  );
}

export default Home;
