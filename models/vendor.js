const mongoose = require("mongoose");
const vendorSchema = new mongoose.Schema({
  username:{
    type:String,
    // unique:true
  },
  userDisplayName: String,
  description: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    // required: true
  },
  img: {
    type: String,
    // required: true
  },
  price: {
    type: Number,
    // required: true
  },
  type: {
    type: String,
    // required: true
  },
});

const Vendor = new mongoose.model("Vendor", vendorSchema);

module.exports= Vendor