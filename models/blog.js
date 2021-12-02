const mongoose = require("mongoose");
const vendorSchema = new mongoose.Schema({
  username:{
    type:String,
    // unique:true
  },
  img: {
    type: [],
    // required: true
  },
  title: {
    type: String,
    // required: true
  },
  description: {
    type: [],
    // required: true
  },
 
});


const Blog = new mongoose.model("Vendor", vendorSchema);


module.exports= Vendor

