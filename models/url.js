const { timeStamp } = require("console");
const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
shortId:{
  type:String,
  required:true,
},
redirectUrl:{
  type:String,
  required:true,
},
visithistory:[{timeStamp:{type:Number}}],
},
{timestamps:true})



const Url=mongoose.model("url",urlSchema);
module.exports=Url;