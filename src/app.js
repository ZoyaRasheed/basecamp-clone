import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import healthCheckRouter from "./routes/healthcheck.routes.js"


//app.js is entirely for express configuration and index.js would be the entry point of application
const app = express()

// Basic configuration
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))// this is public viewable


//CORS configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173" ,
    credentials : true,
    methods : ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}))


 app.use("/api/v1/healthcheck/", healthCheckRouter)


export default app