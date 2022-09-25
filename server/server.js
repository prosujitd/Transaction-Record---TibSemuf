import express from 'express';  // put "type": "modules" in package.json
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000;
const app = express();

app.use(cors);


await mongoose.connect("mongodb+srv://prosujit:Devcode123@mern-bitfumes.nbo2hhs.mongodb.net/?retryWrites=true&w=majority")

console.log("connected")
// .catch((err)=>console.log("err on connection >> ", err));

console.log("after connect ");

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});