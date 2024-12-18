import dotenv from "dotenv";
import express from "express"
import mongoose from "mongoose";
import bookrouter from "./routes/book.route.js";
import userrouter from "./routes/user.route.js"
import cors from "cors";
import { signup } from "./controller/user.control.js";

//dotenv
dotenv.config();

//express
const app = express()
const PORT = process.env.PORT || 8080;

//connect mongodb
const MONGOURL = process.env.MONGODB;
try{
    mongoose.connect(MONGOURL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongoose")
}catch(error){
    console.log(error);
}

//cors (to run frontend and backend in same port)
app.use(cors());

//parser dat to json
app.use(express.json());

//route
app.use("/book",bookrouter)
app.use("/user",userrouter);

//express app
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})