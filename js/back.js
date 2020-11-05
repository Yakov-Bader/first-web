const express= require('express');
const web=express();
web.get('/',(req,res)=>{
    res.send("you got it");
});
web.listen(3000);