const express=require("express");
const authcontroller=require('../controller/auth');
const router=express.Router();
router.post("/index", authcontroller.index)

module.exports=router;