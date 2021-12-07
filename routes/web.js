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
const controller = require("../controllers/controller");
const services = require('./services');
function initRoutes(app,User,Vendor,Blog) {


    //HOMEPAGE
app.get("/", (req, res) => {
  Vendor.find().then(function(vendor) {
    res.render("index",{req:req,user:req.user,vendor:vendor});
  })
   
  });
  
  app.get("/search", (req, res) => {
    req.session.returnTo=req.originalUrl;
      res.render("search",{req:req,user:req.user});
     
    });
  // API work here
  app.get("/dashboard", (req, res) => {
    req.session.returnTo=req.originalUrl;
    if (req.isAuthenticated()&& req.user.isAdmin==true) {
      Vendor.find().then(function(vendor) {
        res.render("dashboard",{req:req,user:req.user,vendor:vendor});
      })
    } else {
      res.redirect("/vendorlogin");
    }
    
    });

    app.get("/vendordashboard", (req, res) => {
      req.session.returnTo=req.originalUrl;
      if (req.isAuthenticated()&& req.user.isVendor===true) {
        Vendor.find().then(function(vendor) {
          res.render("vendordashboard",{req:req,user:req.user,vendor:vendor});
        })
      } else {
        res.redirect("/vendorlogin");
      }
      
      });
  
    app.get("/add_users", (req, res) => {
      req.session.returnTo=req.originalUrl;
      Vendor.find().then(function(vendor) {
        res.render("add_users",{req:req,user:req.user,vendor:vendor});
      })
      });

      app.get('/update_user', services.update_user)
    //Api work up

  //CATEGORIES
  app.get("/categories", (req, res) => {
    req.session.returnTo=req.originalUrl;
    res.status(200).render("categories",{req:req,user:req.user}); //Ejs file not made yet
  });
  
  app.get("/vendorlogin", (req, res) => {
    res.status(200).render("vendorlogin",{req:req,user:req.user}); //Ejs file not made yet
  });
  
  //LOGIN AND SIGNUP ARE ON SAME PAGE
  app.get("/login", (req, res) => {
    // req.session.returnTo=req.originalUrl;
    res.status(200).render("login",{req:req ,user:req.user});
  });
  app.get("/vendorpage", (req, res) => {
    res.render("vendorpage",{req:req,user:req.user}); //Ejs file not made yet
  });
  // review form
app.get("/form", function (req, res) {
  //Successful authentication, redirect to form .
  if (req.isAuthenticated()) {
    res.render("form",{req:req,user:req.user});
  } else {
    res.redirect("/login");
  }
});

//logout
app.get("/logout", function (req, res) {
  console.log()
  req.logout();
  res.redirect(req.session.returnTo);
});



app.get("/review", function (req, res) {
  req.session.returnTo=req.originalUrl;
  res.render("review",{req:req,user:req.user});
});

  
  
  app.get("/vendorform", function (req, res) {
    if (req.isAuthenticated() && req.user.isVendor === true) {
      res.render("vendorform",{req:req,user:req.user});
    } else {
      res.redirect("/vendorlogin");
    }
    
  });
//venues
app.get("/banquethalls", function (req, res) {
  req.session.returnTo=req.originalUrl;
  Vendor.find().then(function(vendor) {
      res.render("venues/banquethalls",{req:req,user:req.user,vendor:vendor});
    })
  });
  app.get("/chennai", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/chennai",{req:req,user:req.user,vendor:vendor});
    })
  });
  app.get("/hotels", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/hotels",{req:req,user:req.user,vendor:vendor});
    })
  });
  app.get("/destinationwedding", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/destinationwedding",{req:req,user:req.user,vendor:vendor});
    })
  });
  
  app.get("/delhi", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/delhi",{req:req,user:req.user,vendor:vendor});
    })
  });
  
  app.get("/resorts", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/resorts",{req:req,user:req.user,vendor:vendor});
    })
  });
  
  app.get("/pune", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/pune",{req:req,user:req.user,vendor:vendor});
    })
  });
  
  app.get("/mumbai", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/mumbai",{req:req,user:req.user,vendor:vendor});
    })
  });

  app.get("/subscribe", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("subscribe",{req:req,user:req.user,vendor:vendor});
    })
  });
  
  app.get("/hyderabad", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/hyderabad",{req:req,user:req.user,vendor:vendor});
    })
  });
  app.get("/kolkata", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/kolkata",{req:req,user:req.user,vendor:vendor});
    })
  });
  app.get("/lawns", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("venues/lawns",{req:req,user:req.user,vendor:vendor});
    })
  });

  app.get("/blog", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Blog.find().then(function(vendor) {
      res.render("blog",{req:req,user:req.user,vendor:vendor});
    })
    
  });
  app.get("/blogupdate", function (req, res) {
    req.session.returnTo=req.originalUrl;
    if (req.isAuthenticated()) {
      Vendor.find().then(function(vendor) {
        res.render("blog_update",{req:req,user:req.user,vendor:vendor});
      })
    } else {
      res.redirect("/login");
    }
    
  });
  //gallery
  app.get("/outfits", (req, res) => {
    req.session.returnTo=req.originalUrl;
    Blog.find().then(function(vendor) {
      res.render("gallery/outfits",{req:req,user:req.user,vendor:vendor});
    })
    });
    app.get("/accessories", (req, res) => {
      req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("gallery/accessories",{req:req,user:req.user,vendor:vendor});
    })
    });
    app.get("/gallery_card", (req, res) => {
      req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("gallery/gallery_card",{req:req,user:req.user,vendor:vendor});
    })
    });
    app.get("/gallery_mendhi", (req, res) => {
      req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("gallery/gallery_mendhi",{req:req,user:req.user,vendor:vendor});
    })
    });
    app.get("/gallery_decor", (req, res) => {
      req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("gallery/gallery_decor",{req:req,user:req.user,vendor:vendor});
    })
    });
    app.get("/gallery_photography", (req, res) => {
      req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("gallery/gallery_photography",{req:req,user:req.user,vendor:vendor});
    })
    });

//vendors
app.get("/vendors", function (req, res) {
  req.session.returnTo=req.originalUrl;
    res.render("vendors",{req:req,user:req.user});
  });
  
  app.get("/photographer", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/photographer",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  app.get("/makeup", function (req, res) {
    req.session.returnTo=req.originalUrl;
     Vendor.find().then(function(vendor) {
      res.render("vendors/makeup",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  app.get("/bridalwear", function (req, res) {
    req.session.returnTo=req.originalUrl;
     Vendor.find().then(function(vendor) {
      res.render("vendors/bridalwear",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  app.get("/groomwear", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/groomwear",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  app.get("/musicanddance", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/musicanddance",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  app.get("/flourist", function (req, res) {
    req.session.returnTo=req.originalUrl;
     Vendor.find().then(function(vendor) {
      res.render("vendors/flourist",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  app.get("/honeymoon", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/honeymoon",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  
  app.get("/food", function (req, res) {
    req.session.returnTo=req.originalUrl;
   Vendor.find().then(function(vendor) {
      res.render("vendors/food",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  
  app.get("/mehndi", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/mehndi",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  
  app.get("/planninganddecor", function (req, res) {
    req.session.returnTo=req.originalUrl;
     Vendor.find().then(function(vendor) {
      res.render("vendors/planninganddecor",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  app.get("/invites", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/invites",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  
  app.get("/jewellary", function (req, res) {
    req.session.returnTo=req.originalUrl;
    Vendor.find().then(function(vendor) {
      res.render("vendors/jewellary",{req:req,user:req.user,vendor:vendor});
      
    })
  });
  app.get("/sort", function (req, res) {
    req.session.returnTo=req.originalUrl;
    let cat=req.query.categories;
    Vendor.find({"type":cat}).sort({"price":-1}).then(function(vendor) {
      res.render("sort",{req:req,user:req.user,vendor:vendor,cat:cat});

    })
  });
  app.get("/sortd", function (req, res) {
    req.session.returnTo=req.originalUrl;
    let cat=req.query.categories;
    Vendor.find({"type":cat}).sort({"price":1}).then(function(vendor) {
      res.render("sort",{req:req,user:req.user,vendor:vendor,cat:cat});

    })
  });
 
  app.get("/sortloc", function (req, res) {
    req.session.returnTo=req.originalUrl;
    let cat=req.query.categories;
    let location=req.query.location;
    Vendor.find({"type":cat,"location":location}).sort({"price":1}).then(function(vendor) {
      res.render("sort",{req:req,user:req.user,vendor:vendor,cat:cat});

    })
  });
  // API
app.post('/api/users', controller.create);
app.get('/api/users', controller.find);
app.put('/api/users/:id', controller.update);
app.delete('/api/users/:id', controller.delete);



app.get("/:id", async(req, res) => {
  req.session.returnTo=req.originalUrl;
  try {
    if (req.query.blog) {
      let vid= req.params.id
    const foo =await Blog.findById(vid).then(function(vendor) {
      res.render("blog_detail",{req:req,user:req.user,vendor:vendor});
    })
    throw new Error("We have Trooouble:)")
    }
    let vid= req.params.id
    const foo =await Vendor.findById(vid).then(function(vendor) {
      res.render("vendor_form",{req:req,user:req.user,vendor:vendor});
    })
    throw new Error("We have Trooouble:)")
  } catch (error) {
    
  }
});



}

module.exports = initRoutes


