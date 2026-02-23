import 'dotenv/config'
import app from './app.js'
import connectDB from './db/index.js'

const PORT = process.env.PORT

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
})
.catch(error=>{
    console.error("MongoDB connection error failed ",error)
    process.exit(1)
})

