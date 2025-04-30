import express from "express";
import 'dotenv/config'
const app = express()

app.get("/api/register",(req,res)=>{
    res.send("Hello world!")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on localhost ${process.env.PORT}`);
}) 