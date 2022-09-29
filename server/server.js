import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.DATABASE_URL);
import express from "express"; // put "type": "modules" in package.json
import connect from "./database/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";

import TransactionApi from "./routes/transactionsApi.js";
import AuthApi from "./routes/authApi.js";
import UserApi from "./routes/UserApi.js";
import passport from "passport";

// require('dotenv').config()
import passportConfig from "./config/passport.js"


const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);



app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.use('/transaction',TransactionApi)
app.use('/auth',AuthApi)
app.use('/user',UserApi)

await connect();  // let's make db connect first before

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
