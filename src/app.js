import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import healthCheckRouter from "./routes/healthcheck.routes.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser'


//app.js is entirely for express configuration and index.js would be the entry point of application
const app = express()

// Basic configurations
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))// this is public viewable
app.use(cookieParser())

//CORS configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173" ,
    credentials : true,
    methods : ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}))


 app.use("/api/v1/healthcheck/", healthCheckRouter)
 app.use("/api/v1/auth/",authRouter)


export default app;