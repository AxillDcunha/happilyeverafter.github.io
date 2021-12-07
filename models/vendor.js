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
    

// /* 1 */
// {
  
//   "username" : "photo1@gmail.com",
//   "userDisplayName" : "The test ;)",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "The test ;)",
//   "img" : "https://image.wedmegood.com/resized/350X/uploads/vendor_cover_pic/22892/7f7a1f03-7fb7-43a0-8cbf-d1e4f8e4bbd5.jpg",
//   "price" : 95000,
//   "type" : "planninganddecor",
//   "location":"Delhi",
//   "__v" : 0
// },

// /* 2 */
// {
 
//   "username" : "photo1@gmail.com",
//   "userDisplayName" : "Forever Photos",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Forever Photos",
//   "img" : "http://media.santabanta.com/gal/event/Deepika-and-Ranveer-Wedding/deepika-and-ranveer-wedding-7.jpg",
//   "price" : 95000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 3 */
// {
 
//   "username" : "photo1@gmail.com",
//   "userDisplayName" : "Lens of Light",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Lens of Light",
//   "img" : "https://whatknot.in/wp-content/uploads/2016/03/WhatKnot-Best-Couple-Shots-2016-74.jpg",
//   "price" : 95000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 4 */
// {
 
//   "username" : "photo1@gmail.com",
//   "userDisplayName" : "Vibrant Shades",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Vibrant Shades..)",
//   "img" : "https://cdn0.weddingwire.com/emp/fotos/6/7/4/2/3/1/1428605108228-dayton-2.jpg",
//   "price" : 95000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 5 */
// {
  
//   "username" : "photo1@gmail.com",
//   "userDisplayName" : "Timeless Treasures",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Timeless Treasures",
//   "img" : "https://theinmansphoto.com/wp-content/uploads/sites/4141/2020/04/ceremony-68-scaled.jpg",
//   "price" : 95000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 6 */
// {
  
//   "username" : "axilldcunha@gmail.com",
//   "userDisplayName" : "testetst",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "testest",
//   "img" : "https://image.wedmegood.com/resized/350X/uploads/member/389478/1615359248_DSC02676.jpg",
//   "price" : 5000,
//   "type" : "mehndi",
//   "__v" : 0
// },

// /* 7 */
// {
 
//   "username" : "axilldcunha@gmail.com",
//   "userDisplayName" : "Flash Parties",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Flash Parties",
//   "img" : "https://image.wedmegood.com/resized/350X/uploads/member/389478/1615359248_DSC02676.jpg",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 8 */
// {
  
//   "username" : "geygfeuy@gmail.com",
//   "userDisplayName" : "Photo Express",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Photo Express",
//   "img" : "http://static1.squarespace.com/static/5f2e5f8e26981d45379c7f32/t/5fda9b443127767c47e462e3/1608162139716/Sydney+Wedding+Photography+by+Katsu+-8.jpg?format=1500w",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 9 */
// {
 
//   "username" : "terlayy@gmail.com",
//   "userDisplayName" : "Memory Makers",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Memory Makers",
//   "img" : "https://www.modernwedding.com.au/wp-content/uploads/2019/08/20/Wedding-Photographer-8.jpg",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 10 */
// {
 
//   "username" : "jackson@gmail.com",
//   "userDisplayName" : "Dream Big Studio",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Dream Big Studio",
//   "img" : "https://media.weddingz.in/images/20200128124557/7-wedding-photographers-in-india-you-must-check-out-3-800x550.jpg",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 11 */
// {
  
//   "username" : "harry@gmail.com",
//   "userDisplayName" : "Event's Studio",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Event's Studio",
//   "img" : "https://www.lookslikefilm.com/wp-content/uploads/2018/08/Wedding-Photographer-DC.jpg",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 12 */
// {
 
//   "username" : "jerry@gmail.com",
//   "userDisplayName" : "A New View",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "A New View",
//   "img" : "https://theinmansphoto.com/wp-content/uploads/sites/4141/2020/04/ceremony-68-scaled.jpg",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 13 */
// {
 
//   "username" : "carry@gmail.com",
//   "userDisplayName" : "Perfect Picture",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Perfect Picture",
//   "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-zf6y-6nGtcETfqkV29OYGXDnwi7eHpI_oThj-QRmKQoU4h9Udc3QSSTQuU-HJwR4Gk&usqp=CAU",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 14 */
// {
 
//   "username" : "furry@gmail.com",
//   "userDisplayName" : "Capture Moments",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Capture Moments",
//   "img" : "https://media.weddingz.in/images/20200128124557/7-wedding-photographers-in-india-you-must-check-out-3-800x550.jpg",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 15 */
// {
  
//   "username" : "john@gmail.com",
//   "userDisplayName" : "Jackson Studio",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "Jackson Studio",
//   "img" : "https://media-api.xogrp.com/images/16238901-d55a-4280-9037-a078d2ef15d3",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 16 */
// {
  
//   "username" : "jessica@gmail.com",
//   "userDisplayName" : "jessica's Studio",
//   "description" : "The Wedding Fellas is a team of photographers based in Bangalore and has been in this industry for many years. Their team specializes in both candid and traditional photography. They are open to travel to different venues and also provide their services for destination weddings as well. They make sure that they make a comfortable atmosphere for their clients to capture their precious moments in the most realistic manner. They make sure that they provide their services in the most perfect way possible. Services Offered: Candid Photoshoot Traditional Photography Wedding Albums Maternity Shoots Pre-Wedding Photoshoot",
//   "name" : "jessica's Studio",
//   "img" : "https://media-api.xogrp.com/images/9fe65bd4-3d4c-40fd-81c1-fa55e68f9f9b",
//   "price" : 5000,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 17 */
// {
  
//   "username" : "Cupid Lovestory",
//   "userDisplayName" : "Cupid Lovestory",
//   "description" : "Studio Photo Palace is an innovative photo studio based in Delhi/NCR powered by the blessings of Lt. Parveen Dua and now led by his sons Piyush Dua and Pulikt Dua. Started back in 1988, their pledge was to keep their clients contentment as the top priority hasn’t budged since. To provide top-notch results, they use ingenious gears with the finest technology combined with their proficient and creative team.",
//   "name" : "Cupid Lovestory",
//   "img" : "https://www.onethreeonefour.com/dist/img/seoul-studio/studio-roll.jpg",
//   "price" : 111111,
//   "type" : "photographer",
//   "__v" : 0
// },

// /* 18 */
// {
  
//   "username" : "makemytrip@gmail.com",
//   "userDisplayName" : "Luxury Honeymoon in Goa",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel. ",
//   "name" : "Luxury Honeymoon in Goa",
//   "img" : "https://thedigitaly.s3.us-east-2.amazonaws.com/travel/img/2021/05/16110604/goa-honeymoon.jpg ",
//   "price" : 22970,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 19 */
// {
  
//   "username" : "tripigo@gmail.com",
//   "userDisplayName" : "Lovely vacation at Oblu Helengeli, Maldives",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Lovely vacation at Oblu Helengeli, Maldives",
//   "img" : "https://qph.fs.quoracdn.net/main-qimg-645eabb8f9a4e35252d9be64ddf9f750-lq ",
//   "price" : 104333,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 20 */
// {
  
//   "username" : "makemytrip@gmail.com",
//   "userDisplayName" : "Port Blair & Havelock",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Port Blair & Havelock",
//   "img" : "https://www.seosakti.com/wp-content/uploads/2021/04/andaaaaaa-nHKsLY6HtR.jpeg",
//   "price" : 28054,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 21 */
// {
 
//   "username" : "makeyourtrip@gmail.com",
//   "userDisplayName" : "Swiss Paris Delight",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Swiss Paris Delight",
//   "img" : "https://lh3.googleusercontent.com/proxy/HwpgH0zkJk3d2a1KhzhhZr_Cu0VHxFYiT1OhUneM_dken5ybH-HsBn-jBvI9CKTWTopBAUUt_Em-VxLrT163CF75qEWOWTtRcQ0maph-MBO2rMvr9vrwmHTVnAnC8NH6vt-V73YmlM-29s0",
//   "price" : 80937,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 22 */
// {
 
//   "username" : "gotrip@gmail.com",
//   "userDisplayName" : "Retreat to Shimla, Manali ,Chandigarh",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Retreat to Shimla, Manali ,Chandigarh",
//   "img" : "https://s3.india.com/travel/wp-content/uploads/2015/06/Himachal-Pradesh_Rohtang.jpg",
//   "price" : 20852,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 23 */
// {
 
//   "username" : "gotrip@gmail.com",
//   "userDisplayName" : "Retreat to Shimla, Manali ,Chandigarh",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Retreat to Shimla, Manali ,Chandigarh",
//   "img" : "https://s3.india.com/travel/wp-content/uploads/2015/06/Himachal-Pradesh_Rohtang.jpg",
//   "price" : 20852,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 24 */
// {
  
//   "username" : "gotripwithme@gmail.com",
//   "userDisplayName" : "Kashmir",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Kashmir",
//   "img" : "https://media.easemytrip.com/media/Blog/India/637188548584468080/637188548584468080kVThG1.jpg",
//   "price" : 15744,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 25 */
// {
 
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Romantic Seaside Holiday in Andaman",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Romantic Seaside Holiday in Andaman",
//   "img" : "https://images.thrillophilia.com/image/upload/s--fmgc6oSr--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/135/046/original/1540218319_shutterstock_1092116759.jpg.jpg?1540218318",
//   "price" : 40901,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 26 */
// {
  
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Coorg",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Coorg",
//   "img" : "https://media-cdn.tripadvisor.com/media/photo-s/0e/a9/d6/bc/lily-pool-villa.jpg",
//   "price" : 9775,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 27 */
// {
  
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Best of Kashmir",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Best of Kashmir",
//   "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/03/Srinagar.jpg",
//   "price" : 28162,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 28 */
// {
 
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Savoy Seychelles",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Savoy Seychelles",
//   "img" : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52843813.jpg?k=d5f95f3440dfb5dc8222b413746146565b765e5c3a51f8ee8075425dc9b49478&o=",
//   "price" : 28162,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 29 */
// {
 
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Savoy Seychelles",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Savoy Seychelles",
//   "img" : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52843813.jpg?k=d5f95f3440dfb5dc8222b413746146565b765e5c3a51f8ee8075425dc9b49478&o=",
//   "price" : 28162,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 30 */
// {
  
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Magical Switzerland",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Magical Switzerland",
//   "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/08/zurich-switzerland.jpg",
//   "price" : 112395,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 31 */
// {
  
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Magical Switzerland",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Magical Switzerland",
//   "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/08/zurich-switzerland.jpg",
//   "price" : 112395,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 32 */
// {
 
//   "username" : "honeymoontrip@gmail.com",
//   "userDisplayName" : "Bora Bora",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Bora Bora",
//   "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZFfijs3IWI8AIj894m8MMhZIIHG-nfIaRg&usqp=CAU",
//   "price" : 176385,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 33 */
// {
  
//   "username" : "honeymoontrip@gmail.com",
//   "userDisplayName" : "California",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "California",
//   "img" : "https://www.planetware.com/photos-large/USCA/romantic-getaways-california-big-sur.jpg",
//   "price" : 134395,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 34 */
// {
  
//   "username" : "makemylife@gmail.com",
//   "userDisplayName" : "Dubai",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Dubai",
//   "img" : "https://premiotravels.com/wp-content/uploads/2017/06/260-1280x720.jpeg",
//   "price" : 23395,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 35 */
// {
 
//   "username" : "makemylife@gmail.com",
//   "userDisplayName" : "Greece",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Greece",
//   "img" : "https://img.traveltriangle.com/blog/wp-content/uploads/2017/03/Untitled-design-30.jpg",
//   "price" : 156789,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 36 */
// {
  
//   "username" : "makemylife@gmail.com",
//   "userDisplayName" : "Bali",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Bali",
//   "img" : "https://www.planetware.com/wpimages/2020/03/indonesia-bali-best-time-to-visit-best-time-to-go.jpg",
//   "price" : 59789,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 37 */
// {
 
//   "username" : "makemylife@gmail.com",
//   "userDisplayName" : "Mauritius",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Mauritius",
//   "img" : "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/shutterstock_1042230565.jpg",
//   "price" : 78569,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 38 */
// {
  
//   "username" : "makemylife@gmail.com",
//   "userDisplayName" : "Phuket and Krabi.",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Phuket and Krabi.",
//   "img" : "https://wallpaperaccess.com/full/2908962.jpg",
//   "price" : 178569,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 39 */
// {
 
//   "username" : "makemytrip@gmail.com",
//   "userDisplayName" : "Luxury Honeymoon in Goa",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel. ",
//   "name" : "Luxury Honeymoon in Goa",
//   "img" : "https://thedigitaly.s3.us-east-2.amazonaws.com/travel/img/2021/05/16110604/goa-honeymoon.jpg ",
//   "price" : 22970,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 40 */
// {
 
//   "username" : "tripigo@gmail.com",
//   "userDisplayName" : "Lovely vacation at Oblu Helengeli, Maldives",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Lovely vacation at Oblu Helengeli, Maldives",
//   "img" : "https://qph.fs.quoracdn.net/main-qimg-645eabb8f9a4e35252d9be64ddf9f750-lq ",
//   "price" : 104333,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 41 */
// {
  
//   "username" : "makemytrip@gmail.com",
//   "userDisplayName" : "Port Blair & Havelock",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Port Blair & Havelock",
//   "img" : "https://www.seosakti.com/wp-content/uploads/2021/04/andaaaaaa-nHKsLY6HtR.jpeg",
//   "price" : 28054,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 42 */
// {
 
//   "username" : "makeyourtrip@gmail.com",
//   "userDisplayName" : "Swiss Paris Delight",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Swiss Paris Delight",
//   "img" : "https://lh3.googleusercontent.com/proxy/HwpgH0zkJk3d2a1KhzhhZr_Cu0VHxFYiT1OhUneM_dken5ybH-HsBn-jBvI9CKTWTopBAUUt_Em-VxLrT163CF75qEWOWTtRcQ0maph-MBO2rMvr9vrwmHTVnAnC8NH6vt-V73YmlM-29s0",
//   "price" : 80937,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 43 */
// {
  
//   "username" : "gotrip@gmail.com",
//   "userDisplayName" : "Retreat to Shimla, Manali ,Chandigarh",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Retreat to Shimla, Manali ,Chandigarh",
//   "img" : "https://s3.india.com/travel/wp-content/uploads/2015/06/Himachal-Pradesh_Rohtang.jpg",
//   "price" : 20852,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 44 */
// {
 
//   "username" : "gotrip@gmail.com",
//   "userDisplayName" : "Retreat to Shimla, Manali ,Chandigarh",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Retreat to Shimla, Manali ,Chandigarh",
//   "img" : "https://s3.india.com/travel/wp-content/uploads/2015/06/Himachal-Pradesh_Rohtang.jpg",
//   "price" : 20852,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 45 */
// {
 
//   "username" : "gotripwithme@gmail.com",
//   "userDisplayName" : "Kashmir",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Kashmir",
//   "img" : "https://media.easemytrip.com/media/Blog/India/637188548584468080/637188548584468080kVThG1.jpg",
//   "price" : 15744,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 46 */
// {
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Romantic Seaside Holiday in Andaman",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Romantic Seaside Holiday in Andaman",
//   "img" : "https://images.thrillophilia.com/image/upload/s--fmgc6oSr--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/135/046/original/1540218319_shutterstock_1092116759.jpg.jpg?1540218318",
//   "price" : 40901,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 47 */
// {
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Coorg",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Coorg",
//   "img" : "https://media-cdn.tripadvisor.com/media/photo-s/0e/a9/d6/bc/lily-pool-villa.jpg",
//   "price" : 9775,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 48 */
// {
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Best of Kashmir",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Best of Kashmir",
//   "img" : "https://www.sharpholidays.in/blog/wp-content/uploads/2018/03/Srinagar.jpg",
//   "price" : 28162,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 49 */
// {
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Savoy Seychelles",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Savoy Seychelles",
//   "img" : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52843813.jpg?k=d5f95f3440dfb5dc8222b413746146565b765e5c3a51f8ee8075425dc9b49478&o=",
//   "price" : 28162,
//   "type" : "Honey Moon",
//   "__v" : 0
// },

// /* 50 */
// {
  
//   "username" : "gohoneymoon@gmail.com",
//   "userDisplayName" : "Savoy Seychelles",
//   "description" : "A honeymoon is a vacation taken by newlyweds immediately after their wedding, to celebrate their marriage. Today, honeymoons are often celebrated in destinations considered exotic or romantic. The word derives from the Old English honey moon. Hony refers to the new marriage’s sweetness, as well as a reference to the European custom of giving newlyweds enough mead, “an alcoholic liquor made by fermenting honey and water,” to last a month. That would keep many a couple happy. Moon refers to how long that sweetness might probably last, or from the changing aspect of the moon—from full to waning. In French, the equivalent word is lune de miel. The German version is flitterwhochen, from flitter, which means tinsel.",
//   "name" : "Savoy Seychelles",
//   "img" : "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52843813.jpg?k=d5f95f3440dfb5dc8222b413746146565b765e5c3a51f8ee8075425dc9b49478&o=",
//   "price" : 28162,
//   "type" : "Honey Moon",
//   "__v" : 0
// }
//   ]).then(function(){
//     console.log("Data inserted")  // Success
//   }).catch(function(error){
//     console.log(error)      // Failure
//   });
module.exports= Vendor

