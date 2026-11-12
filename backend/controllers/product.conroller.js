import { Product } from "../models/product.model.js"

export async function createProduct( req,res){
   const{name,price,quantity}=req.body
   console.log (name,price,quantity)
    try {
        const product=await Product.create({name,price,quantity})
        res.status(200).json({
            success:true,
            message:"product created successfully",
            product
            
        })
    } catch (error) {
        res.status(500).json({
           success:false,
           message :error.message||"failed to create product"
        })
    }

}