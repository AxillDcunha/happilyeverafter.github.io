const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
    fullname:{
        type:String,
        // unique:true
      },
    email:{
    type:String,
    // unique:true
  },
  num: {
    type:String,
    // required: true
  },
  date: {
    type: String,
    // required: true
  },
  usercontact:{
      type:String,
  },
  vendorcontact:{
    type:String,
  }
  
});


const Contact = new mongoose.model("Contact", ContactSchema);


module.exports= Contact

