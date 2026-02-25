const mongoose=require("mongoose")
async function connectDb(){
  mongoose.connect(process.env.MONGO_URL)
  console.log("connected to db")
}
module.exports=connectDb;
