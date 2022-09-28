import express from "express"; // put "type": "modules" in package.json
import connect from "./database/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";

import TransactionApi from "./routes/transactionsApi.js";
import AuthApi from "./routes/authApi.js";
import passport from "passport";
import dotenv from "dotenv";
// require('dotenv').config()
dotenv.config();

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());



app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.use('/transaction',TransactionApi)
app.use('/auth',AuthApi)

await connect();  // let's make db connect first before

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
