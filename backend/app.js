import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
dotenv.config()
const app =express()
const PORT=process.env.PORT||5000
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.json({
        message:"welcome to mongodb with expressjs"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on: http://localhost:${PORT}`)
})