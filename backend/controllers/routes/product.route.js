import express from "express"
import { createProduct } from "../controllers/product.controller.js"

 export const router= express.Router()

router.post("/",createProduct)