const Vendor = require('../models/vendor');
var vendor= require('../models/vendor');
const axios = require('axios');
exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id}})
        .then(function(vendordata){
            res.render("update_user", { vendor : vendordata.data,req:req,user:req.user})
        })
        .catch(err =>{
            res.send(err);
        })
  }

