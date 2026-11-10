import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name is required"],

    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false,
        default:""
    }
},{
    timestamps:true
})

export const Product=mongoose.model("Product",ProductSchema)