//Imports
const express= require("express");
const bodyParser=require("body-parser");
const path=require("path");
const port= process.env.port||3001

const app=express();

//seting static files
app.use(express.static("public")); //for servinhg staticfile
//setting view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//HOMEPAGE 
app.get("/",(req,res)=>{
    res.status(200).render('index');
});

// //CATEGORIES
// app.get("/categories",(req,res)=>{
//     res.status(200).render('index');
// });




// //LOGIN
// app.get("/login",(req,res)=>{
//     res.status(200).render('index');
// });




//Listening on port 3000
app.listen(port,()=>{
    console.log(`sever started on port ${port}`);
});