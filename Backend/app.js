import express from "express";
import 'dotenv/config'
import authRouts from "./routes/auth.Routes.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/api/auth/",authRouts) // auth routes

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})