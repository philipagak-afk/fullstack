import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import mongoose from "mongoose" 
import { router } from "./routes/product.route.js"
dotenv.config()
const app =express()
const PORT=process.env.PORT||5000
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(morgan("dev"))
app.use("/api/v1/products",router)
app.get("/",(req,res)=>{
    res.json({
        message:"welcome to mongodb with expressjs"
    })
})
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to database")
    app.listen(PORT,()=>{
    console.log(`server is running on: http://localhost:${PORT}`)
})
})
.catch((error)=>{
    console.log(error.message||'failed to connect')
})