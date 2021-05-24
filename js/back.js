//to run the dev in the Json-comand: npm run dev
// ctrl `

// const http= require('http');
// console.log("it stated");

// const server = http.createServer((req,res)=>{
//     console.log(req,res);
//     res.end("back.js is working all the time")
// });
// server.listen(3000)

const postRouter = require("./post");
const express= require('express');
const morgan = require("morgan");
const web = express();

web.use(morgan("dev"));
//web.use(postRouter);

web.use("/", postRouter)
web.listen(3000,()=>{
    console.log("works");
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  
axios.get('https://jsonplaceholder.typicode.com/tods/1')
.then(response => console.log(response.data))
.catch(error => console.log(error));
/*
const fs=require('fs');
const file='TEXT.txt';
//reading file ext in order
const data=fs.readFileSync(file);
console.log(data.toString());
//reading file ext not in order
//wetch file: fs.watch(file,()=>{ console.log('good change in text')});
fs.readFile(file, (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    };
});
*/
