const mongoose = require("mongoose");
const gallerySchema = new mongoose.Schema({
  
  img: {
    type: [],
    // required: true
  },

});


const Gallery = new mongoose.model("Gallery", gallerySchema);

