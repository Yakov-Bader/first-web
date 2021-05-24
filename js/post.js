const express= require('express');
const controler= require('./contoler');
const router=express.Router();

router.get("/",controler.getPost);

// exports.ownMiddleWare=((req,res,next)=>{
//     console.log("middle working");
//     next();
// })

module.exports = router;