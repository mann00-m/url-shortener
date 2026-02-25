const express=require("express")
const app=express()
require('dotenv').config();
const connectDb=require("./connect")
const URL=require("./models/url")
connectDb();
app.use(express.json())

const urlRoute=require("./routes/url");
const { timeStamp } = require("console");
app.use("/url",urlRoute)
app.get("/:shortId",async (req,res)=>{
const shortId=req.params.shortId;
const entry= await URL.findOneAndUpdate({
  shortId
},{$push:{
  visithistory:{
    timeStamp:Date.now()
  },
}})

res.redirect(entry.redirectUrl)
})
app.listen(3000)