const express=require("express")
const {handlegenerateurl}=require("../constrollers/url")
const router=express.Router();


router.post("/",handlegenerateurl)


module.exports=router;




