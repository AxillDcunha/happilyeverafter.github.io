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

function initRoutes(app,User) {


    //HOMEPAGE
app.get("/", (req, res) => {
    res.status(200).render("index",{req:req,user:req.user});
  });
  
 
  
  //CATEGORIES
  app.get("/categories", (req, res) => {
    res.status(200).render("categories",{req:req,user:req.user}); //Ejs file not made yet
  });
  
  app.get("/vendorlogin", (req, res) => {
    res.status(200).render("vendorlogin",{req:req,user:req.user}); //Ejs file not made yet
  });
  
  
  //LOGIN AND SIGNUP ARE ON SAME PAGE
  app.get("/login", (req, res) => {
    res.status(200).render("login",{req:req ,user:req.user});
  });
  
  app.get("/vendorform", function (req, res) {
    res.render("vendorform",{req:req,user:req.user});
  });
//venues
app.get("/banquethalls", function (req, res) {
    res.render("venues/banquethalls",{req:req,user:req.user});
  });
  app.get("/chennai", function (req, res) {
    res.render("venues/chennai",{req:req,user:req.user});
  });
  app.get("/hotels", function (req, res) {
    res.render("venues/hotels",{req:req,user:req.user});
  });
  app.get("/destinationwedding", function (req, res) {
    res.render("venues/destinationwedding",{req:req,user:req.user});
  });
  
  app.get("/delhi", function (req, res) {
    res.render("venues/delhi",{req:req,user:req.user});
  });
  
  app.get("/resorts", function (req, res) {
    res.render("venues/resorts",{req:req,user:req.user});
  });
  
  app.get("/pune", function (req, res) {
    res.render("venues/pune",{req:req,user:req.user});
  });
  
  app.get("/mumbai", function (req, res) {
    res.render("venues/mumbai",{req:req,user:req.user});
  });
  
  app.get("/hyderabad", function (req, res) {
    res.render("venues/hyderabad",{req:req,user:req.user});
  });
  app.get("/kolkata", function (req, res) {
    res.render("venues/kolkata",{req:req,user:req.user});
  });
  app.get("/lawns", function (req, res) {
    res.render("venues/lawns",{req:req,user:req.user});
  });

  

//vendors
app.get("/vendors", function (req, res) {
    res.render("vendors",{req:req,user:req.user});
  });
  
  app.get("/photographer", function (req, res) {
    res.render("vendors/photographer",{req:req,user:req.user});
  });
  
  app.get("/makeup", function (req, res) {
    res.render("vendors/makeup",{req:req,user:req.user});
  });
  app.get("/bridalwear", function (req, res) {
    res.render("vendors/bridalwear",{req:req,user:req.user});
  });
  
  app.get("/groomwear", function (req, res) {
    res.render("vendors/groomwear",{req:req,user:req.user});
  });
  app.get("/musicanddance", function (req, res) {
    res.render("vendors/musicanddance",{req:req,user:req.user});
  });
  
  app.get("/flourist", function (req, res) {
    res.render("vendors/flourist",{req:req,user:req.user});
  });
  
  app.get("/honeymoon", function (req, res) {
    res.render("vendors/honeymoon",{req:req,user:req.user});
  });
  
  
  app.get("/food", function (req, res) {
    res.render("vendors/food",{req:req,user:req.user});
  });
  
  
  app.get("/mehndi", function (req, res) {
    res.render("vendors/mehndi",{req:req,user:req.user});
  });
  
  
  app.get("/planninganddecor", function (req, res) {
    res.render("vendors/planninganddecor",{req:req,user:req.user});
  });
  
  app.get("/invites", function (req, res) {
    res.render("vendors/invites",{req:req,user:req.user});
  });
  
  app.get("/jewellary", function (req, res) {
    res.render("vendors/jewellary",{req:req,user:req.user});
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
    req.logout();
    res.redirect("/");
  });
  
  
  
  app.get("/review", function (req, res) {
    res.render("review",{req:req,user:req.user});
  });
  
    
}

module.exports = initRoutes