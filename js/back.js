const express= require('express');
const web=express();
web.get('/',(req,res)=>{
    res.send("you thank got it");
});
web.listen(3000);


