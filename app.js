//Imports
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const vendor=require("./models/vendor");
const Vendor = require("./models/vendor");
const Gallery = require("./models/gallery");
//Port 
const port = process.env.port || 3000;

const app = express();

//seting static files
app.use(express.static("public")); //for servinhg staticfile
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//setting view engine to EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret:
      "56e8723jixdoi3wxe-0i2e02ircm9qfc'qzhgjjjkbhkow9xuednx@!&t89udjxdwnind",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/Happilyeverafter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  userDisplayName: String,
  // usertype:{
  //     type: Boolean,
  //     default:false
  // },
  isAdmin:{
    type: Boolean,
      default:false
  },
  isVendor:{
    type: Boolean,
      default:false
  },
  vendorinfo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Vendor"
  }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/happilyeverafter",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      console.log(profile.emails[0].value);
      User.findOrCreate(
        {
          username: profile.emails[0].value,
          googleId: profile.id,
          userDisplayName: profile.displayName,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/happilyeverafter",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect to homepage .
    res.redirect("/");
  }
);
require('./routes/web')(app,User,Vendor)

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  });
});

// app.get("/signup",(req,res)=>{
//     res.status(200).render('login');
// });

// user registeration form
app.post("/register", function (req, res) {
  User.register(
    { username: req.body.username, userDisplayName: req.body.Uname },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/login");
      } else {
        console.log(req);
        passport.authenticate("local")(req, res, function () {
          res.redirect("/");
        });
      }
    }
  );
});

app.post("/vendorform", function (req, res) {

  
});

// //ream
// app.post("/vendorform", function (req, res) {
//   Vendor.register(
//     { username: req.body.username, userDisplayName: req.body.Uname },
//     req.body.password,
//     function (err, user) {
//       if (err) {
//         console.log(err);
//         res.redirect("/login");
//       } else {
//         console.log(req);
//         passport.authenticate("local")(req, res, function () {
//           res.redirect("/");
//         });
//       }
//     }
//   );


// });

//vendor login reg
app.post("/vendorlogin", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    // usertype:true
    // isVendor:true
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  });
});

// app.get("/signup",(req,res)=>{
//     res.status(200).render('login');
// });

// user registeration form
app.post("/vendorregister", function (req, res) {
  User.register(
    { username: req.body.username, userDisplayName: req.body.Uname,isVendor:true },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/login");
      } else {
        console.log(req);
        passport.authenticate("local")(req, res, function () {
          res.redirect("/");
        });
      }
    }
  );
});


app.post("/vendorinfo", function (req, res) {

  console.log(req);
  Vendor.insertMany([
  
    {
      
      "username" : req.body.userDisplayName,
      "userDisplayName" :req.body.userDisplayName,
      "description" : req.body.description,
      "name" : req.body.userDisplayName,
      "img" : req.body.img,
      "price" :req.body.price,
      "type" : req.body.categorie,
      "__v" : 0
  }
  ]).then(function(){
    console.log("Data inserted")  // Success
    res.redirect("/");
  }).catch(function(error){
    console.log(error)      // Failure
  });

});

app.post("/searchnew",async (req,res)=>{
    try {
        let searchterm=req.body.newnew;
        
        let vendor=await Vendor.find({$text:{ $search: searchterm , $diacriticSensitive:true}}).then(function(vendor) {
          res.render("searchdisp",{req:req,user:req.user,vendor:vendor});
        })
        // throw new Error("We have Trooouble:)")
    } catch (error) {
       console.log(error)
    }
  
    
  });

//Listening on port 3000
app.listen(port, () => {
  console.log(`sever started on port ${port}`);
});
