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
  
    