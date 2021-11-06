const mongoose = require("mongoose");
const vendorSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  userDisplayName: String,
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
});

const vendor = new mongoose.model("vendor", vendorSchema);

module.exports= vendor