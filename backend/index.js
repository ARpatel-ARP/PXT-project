import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/user.routes.js"
import cors from "cors"
import {connectDB} from './config/db.js';
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: "http://localhost:5173", // your frontend codespace URL
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/auth", userRoute)
connectDB()
app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
})
  