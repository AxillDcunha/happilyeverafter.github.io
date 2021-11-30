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
Vendor.insertMany([
    
  
{
      
  "username" : "makemytrip@gmail.com",
  "userDisplayName" : "Luxury Honeymoon in Goa",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel. ",
  "name" : "Luxury Honeymoon in Goa",
  "img" : "https://thedigitaly.s3.us-east-2.amazonaws.com/travel/img/2021/05/16110604/goa-honeymoon.jpg ",
  "price" : 22970,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "tripigo@gmail.com",
  "userDisplayName" : "Lovely vacation at Oblu Helengeli, Maldives",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Lovely vacation at Oblu Helengeli, Maldives",
  "img" : "https://qph.fs.quoracdn.net/main-qimg-645eabb8f9a4e35252d9be64ddf9f750-lq ",
  "price" : 104333,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "makemytrip@gmail.com",
  "userDisplayName" : "Port Blair & Havelock",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Port Blair & Havelock",
  "img" : "https://www.seosakti.com/wp-content/uploads/2021/04/andaaaaaa-nHKsLY6HtR.jpeg",
  "price" :28054,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "makeyourtrip@gmail.com",
  "userDisplayName" : "Swiss Paris Delight",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Swiss Paris Delight",
  "img" : "https://lh3.googleusercontent.com/proxy/HwpgH0zkJk3d2a1KhzhhZr_Cu0VHxFYiT1OhUneM_dken5ybH-HsBn-jBvI9CKTWTopBAUUt_Em-VxLrT163CF75qEWOWTtRcQ0maph-MBO2rMvr9vrwmHTVnAnC8NH6vt-V73YmlM-29s0",
  "price" :80937,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gotrip@gmail.com",
  "userDisplayName" : "Retreat to Shimla, Manali ,Chandigarh",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Retreat to Shimla, Manali ,Chandigarh",
  "img" : "https://s3.india.com/travel/wp-content/uploads/2015/06/Himachal-Pradesh_Rohtang.jpg",
  "price" :20852,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gotrip@gmail.com",
  "userDisplayName" : "Retreat to Shimla, Manali ,Chandigarh",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Retreat to Shimla, Manali ,Chandigarh",
  "img" : "https://s3.india.com/travel/wp-content/uploads/2015/06/Himachal-Pradesh_Rohtang.jpg",
  "price" :20852,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gotripwithme@gmail.com",
  "userDisplayName" : "Kashmir",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Kashmir",
  "img" : "https://media.easemytrip.com/media/Blog/India/637188548584468080/637188548584468080kVThG1.jpg",
  "price" :15744,
  "type" : "Honey Moon",
  "__v" : 0
},



{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Romantic Seaside Holiday in Andaman",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Romantic Seaside Holiday in Andaman",
  "img" : "https://images.thrillophilia.com/image/upload/s--fmgc6oSr--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/135/046/original/1540218319_shutterstock_1092116759.jpg.jpg?1540218318",
  "price" :40901,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Coorg",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Coorg",
  "img" : "https://media-cdn.tripadvisor.com/media/photo-s/0e/a9/d6/bc/lily-pool-villa.jpg",
  "price" : 9775,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Best of Kashmir",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Best of Kashmir",
  "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/03/Srinagar.jpg",
  "price" :28162,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Savoy Seychelles",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Savoy Seychelles",
  "img" : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52843813.jpg?k=d5f95f3440dfb5dc8222b413746146565b765e5c3a51f8ee8075425dc9b49478&o=",
  "price" :28162,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Savoy Seychelles",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Savoy Seychelles",
  "img" : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52843813.jpg?k=d5f95f3440dfb5dc8222b413746146565b765e5c3a51f8ee8075425dc9b49478&o=",
  "price" :28162,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Magical Switzerland",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Magical Switzerland",
  "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/08/zurich-switzerland.jpg",
  "price" : 112395,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "gohoneymoon@gmail.com",
  "userDisplayName" : "Magical Switzerland",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Magical Switzerland",
  "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/08/zurich-switzerland.jpg",
  "price" : 112395,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "honeymoontrip@gmail.com",
  "userDisplayName" : "Bora Bora",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Bora Bora",
  "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZFfijs3IWI8AIj894m8MMhZIIHG-nfIaRg&usqp=CAU",
  "price" : 176385,
  "type" : "Honey Moon",
  "__v" : 0
},



{
      
  "username" : "honeymoontrip@gmail.com",
  "userDisplayName" : "California",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "California",
  "img" : "https://www.planetware.com/photos-large/USCA/romantic-getaways-california-big-sur.jpg",
  "price" : 134395,
  "type" : "Honey Moon",
  "__v" : 0
},

{
      
  "username" : "makemylife@gmail.com",
  "userDisplayName" : "Dubai",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Dubai",
  "img" : "https://premiotravels.com/wp-content/uploads/2017/06/260-1280x720.jpeg",
  "price" : 23395,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "makemylife@gmail.com",
  "userDisplayName" : "Greece",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Greece",
  "img" : "https://img.traveltriangle.com/blog/wp-content/uploads/2017/03/Untitled-design-30.jpg",
  "price" : 156789,
  "type" : "Honey Moon",
  "__v" : 0
},


{
      
  "username" : "makemylife@gmail.com",
  "userDisplayName" : "Bali",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Bali",
  "img" : "https://www.planetware.com/wpimages/2020/03/indonesia-bali-best-time-to-visit-best-time-to-go.jpg",
  "price" : 59789,
  "type" : "Honey Moon",
  "__v" : 0
},

{
      
  "username" : "makemylife@gmail.com",
  "userDisplayName" : "Mauritius",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Mauritius",
  "img" : "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/shutterstock_1042230565.jpg",
  "price" : 78569,
  "type" : "Honey Moon",
  "__v" : 0
},

{
      
  "username" : "makemylife@gmail.com",
  "userDisplayName" : "Phuket and Krabi.",
  "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
  "name" : "Phuket and Krabi.",
  "img" : "https://wallpaperaccess.com/full/2908962.jpg",
  "price" : 178569,
  "type" : "Honey Moon",
  "__v" : 0
},

  ]).then(function(){
    console.log("Data inserted")  // Success
  }).catch(function(error){
    console.log(error)      // Failure
  });
module.exports= Vendor

