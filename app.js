//Imports
const express= require("express");
const bodyParser=require("body-parser");
const path=require("path");
const expressLayouts=require("express-ejs-layouts")
const port= process.env.port||3000;

const app=express();

//seting static files
app.use(express.static("public")); //for servinhg staticfile
app.use("/css",express.static(__dirname+'public/css')); 
app.use("/js",express.static(__dirname+'public/js')); 
app.use("/img",express.static(__dirname+'public/img')); 
 
//setting view engine
app.use(expressLayouts);
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




//LOGIN
app.get("/login",(req,res)=>{
    res.status(200).render('login');
});




//Listening on port 3000
app.listen(port,()=>{
    console.log(`sever started on port ${port}`);
});