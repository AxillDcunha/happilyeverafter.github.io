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
  location:{
    type:String,
  },
  review:{
    type:Array,
  },
  ratingavg:{
    type:Number,
  }
});


const Vendor = new mongoose.model("Vendor", vendorSchema);
vendorSchema.index({name:'text',userDisplayName: 'text',description:'text'});

// Vendor.insertMany([
//   {
      
//     "username" : "jasmin@gmail.com",
//     "userDisplayName" : "Deepak Mehandi Artist",
//     "description" : "mehndi is a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : "Deepak Mehandi Artist",
//     "img" : "https://www.livinghours.com/wp-content/uploads/2016/05/Bridal-mehndi-Designs-1280x720.jpg ",
//     "price" : 5970,
//     "type" : "mehndi",
//   "location" : "Mumbai",
//     "__v" : 0
//   },
  
  
  
  
  
  
//   {
        
//     "username" : "rajkumar@gmail.com",
//     "userDisplayName" : "Raj  Mehandi",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : "Raj  Mehandi",
//     "img" : "https://karmaeyebrow.com/media/2016/05/bridial-heena.jpg ",
//     "price" : 4570,
//     "type" : "mehndi",
//   "location" : "Mumbai",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "prettymehandi@gmail.com",
//     "userDisplayName" : "Pretty Mehandi",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : "Pretty Mehandi ",
//     "img" : "https://www.fashionlady.in/wp-content/uploads/2018/05/Tikki-mehndi-Designs.jpg",
//     "price" : 6581,
//     "type" : "mehndi",
//   "location" : "Mumbai",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "lara@gmail.com",
//     "userDisplayName" : " Lara Rose ",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : "Lara Rose ",
//     "img" : "https://static.toiimg.com/photo/msid-75890046/75890046.jpg?351402 ",
//     "price" : 9871,
//     "type" : "mehndi",
//   "location" : "pune",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "sarahruth@gmail.com",
//     "userDisplayName" : " Sara Ruth ",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " Sara Ruth ",
//     "img" : "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/473/289/original/Burn_pixel_weddings.jpg?1532351850 ",
//     "price" : 8971,
//     "type" : "mehndi",
//   "location" : "pune",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "bella@gmail.com",
//     "userDisplayName" : " Bella mehndi",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " Bella mehndi",
//     "img" : "https://i.pinimg.com/originals/d2/71/4c/d2714cf6b59ffd15cc95d07582a6df0a.jpg ",
//     "price" : 7864,
//     "type" : "mehndi",
//   "location" : "pune",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "pricemehndi@gmail.com",
//     "userDisplayName" : " Prince  mehndi",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " Prince  mehndi",
//     "img" : "https://cdn0.weddingwire.in/articles/images/3/8/2/7/img_7283/t30_latest-simple-mehndi-designs-thelightsmiths-lead.jpg",
//     "price" : 6789,
//     "type" : "mehndi",
//   "location" : "Thane",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "hellomehndi@gmail.com",
//     "userDisplayName" : " Hello mehndi",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " Hello  mehndi",
//     "img" : "https://thecrimsonbride.com/wp-content/uploads/2020/03/god-mehendi-design-41-Simple-mehndi-Designs-For-Your-Back-Hands-768x512.jpg",
//     "price" :6789,
//     "type" : "mehndi",
//   "location" : "Thane",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "pricemehndi@gmail.com",
//     "userDisplayName" : " Lotus  mehndi",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " Lotus  mehndi",
//     "img" : "https://st1.latestly.com/wp-content/uploads/2020/12/Wedding-mehndi-designs.jpg",
//     "price" :9204,
//     "type" : "mehndi",
//   "location" : "Thane",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "imtheone@gmail.com",
//     "userDisplayName" : " Anmol Mehandi Art  ",
//     "description" : "mehndi is a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " Anmol Mehandi Art ",
//     "img" : "https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2019/07/kb1.jpg",
//     "price" :2204,
//     "type" : "mehndi",
//   "location" : "Thane",
//     "__v" : 0
//   },
  
  
  
//   {
        
//     "username" : "youmedesign@gmail.com",
//     "userDisplayName" : " you me Mehandi Art  ",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : " you me Mehandi Art ",
//     "img" : "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/20/Pictures/_60d401fe-12a3-11eb-894e-a8561a6abce9.JPG ",
//     "price" :7804,
//     "type" : "mehndi",
//   "location" : "Mumbai",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "pawarart@gmail.com",
//     "userDisplayName" : " Pawan Mehandi Art ",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : "Pawan Mehandi Art ",
//     "img" : "https://cdn0.weddingwire.in/articles/images/3/8/2/7/img_7283/t30_latest-simple-mehndi-designs-thelightsmiths-lead.jpg",
//     "price" :1254,
//     "type" : "mehndi",
//   "location" : "Mumbai",
//     "__v" : 0
//   },
  
  
//   {
        
//     "username" : "joti@gmail.com",
//     "userDisplayName" : " Joti Mehandi ",
//     "description" : "mehndiis a form of body art and temporary skin decoration usually drawn on hands or legs, in which decorative designs are created on a person's body, using a paste, created from the powdered dry leaves of the henna plant. It is a popular form of body art among the women of South Asia such as India, Bangladesh, Pakistan, Nepal, Maldives, and Sri Lanka, and resembles similar practices found in North Africa and the Middle East. This kind of body art is called mehndiDesign in India, Pakistan, Bangladesh and Nepal. Whereas, in the West, it is called Henna Designs. According to a 2013 study, henna has been used as a dye for the skin (as well as the hair and nails) for more than 4,000 years",
//     "name" : "Joti Mehandi ",
//     "img" : "https://media.weddingz.in/images/173f9ee84da8e212b1823a7ead7803ba/30-latest-bridal-mehndi-designs-of-201837.jpg",
//     "price" :8923,
//     "type" : "mehndi",
//   "location" : "Mumbai",
//     "__v" : 0
//   },
  
  
  


//   ]).then(function(){
//     console.log("Data inserted")  // Success
//   }).catch(function(error){
//     console.log(error)      // Failure
//   });
module.exports= Vendor

