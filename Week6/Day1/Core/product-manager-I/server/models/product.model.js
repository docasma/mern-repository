const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
     title:{
        type:String,
        required:[true,"{path}title is required"],
        minlength:[4,"{path}must have at least 4 chars"]
     },
     price:{
        type:Number,
        required:[true,"{path}price is required"],
        min:[0,"must be valid"]
        
     },
     description:{
        type:String,
        required:[true,"{path}descriptin is required"],
        minlength:[4,"{path}must have at least 4 chars"]
     }
},{timestamps:true})


const Product= mongoose.model("Product",ProductSchema)
module.exports= Product

