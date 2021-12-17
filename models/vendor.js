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
      
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : " 567 Dance ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : " 567 Dance  ",
//     "img" : " https://images.squarespace-cdn.com/content/v1/54d000f4e4b0ac8237a003b5/1456969060964-90ODIFESUN5F2OOGZ93Q/wedding+dance+lessons.jpg?format=1000w ",
//     "price" : 17650,
//     "type" : " Florist ",
//    "location " : "Mumbai",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : " Bella Flowers  ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : " Bella Flowers  ",
//     "img" : "https://images.squarespace-cdn.com/content/v1/597282dd6b8f5bd129c3ae8c/1585083890141-RF5ALBGD6J8MYLOUSNFG/woman+florist+arranging+wedding+bouquet.jpg?format=1000w",
//     "price" : 200000,
//     "type" : " Florist ",
//    "location " : "Mumbai",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Sarahs FlowersS   ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : " Sarahs Flowers   ",
//     "img" : "https://www.phillymag.com/wp-content/uploads/sites/3/2019/02/LocalFlorist_FayeRenee.jpg",
//     "price" : 220000,
//     "type" : " Florist ",
//    "location " : "pune",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Flowers We Do   ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : " Flowers We Do   ",
//     "img" : "https://cdn0.hitched.co.uk/articles/images/5/3/6/3/img_73635/r10_2x_march-hare-floral-design.jpg",
//     "price" : 250000,
//     "type" : " Florist ",
//   "location " : "pune",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "456 Flowers    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : " 456 Flowers    ",
//     "img" : "https://blog.wedsites.com/wp-content/uploads/wedsites-blog-how-much-do-wedding-flowers-cost.jpg",
//     "price" : 270000,
//     "type" : " Florist ",
//   "location " : "pune",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Star Flora    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Star Flora    ",
//     "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKE1KjKDbxgW0hLqk_BnHuyXENCkZbuyXIg&usqp=CAU",
//     "price" : 300000,
//     "type" : " Florist ",
//   "location " : "Thane",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Flora 123    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Flora 123  ",
//     "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ob6xYbRdoSZpi8UDKCBjNV_Ew_3aRGTLHM9SBgb3HKL--CAGXrEQWpeVn-U4XgbPZOY&usqp=CAU",
//     "price" : 310000,
//     "type" : " Florist ",
//   "location " : "Thane",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Alice Flowers    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Alice Flowers   ",
//     "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgC7kw5A3QtojxO3SybN6U1G64nrzBrgFRzSA9IWes1Wk0Dg2NgjNzF636C8k9a4vTiw&usqp=CAU",
//     "price" : 320000,
//     "type" : " Florist ",
//   "location " : "Thane",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Simran Lobo    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Simran Lobo   ",
//     "img" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sidra-m-and-d-1581614799.jpeg?crop=1xw:1xh;center,top&resize=480:*",
//     "price" : 220000,
//     "type" : " Florist ",
//   "location " : "Thane",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Flowers and More    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Flowers and More   ",
//     "img" : "https://images.squarespace-cdn.com/content/v1/5d31d290feea110001811b4b/1578510287241-D1V87VH7AO04B6VQ59UV/Olga_Polo_Photography_The_Flowerman_Ohio_Florist_Wedding_Florist_DIY_Flowers_Designer_Flowers_Columbus_Dayton_Cincinnati_Ohio_Florist_Dahlia_Astilbe_Carnations_Roses_Seeded_Eucalyptus_Bridal_Bouquet_9962.jpg",
//     "price" : 420000,
//     "type" : " Florist ",
//   "location " : "Mumbai",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Just Flower It   ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Just Flower It    ",
//     "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nnWhmGRTzNQIeRuzrw-pi8UAr1YM1CjMgJlz3uU1UXm1xwLIOLb-E4eZ42BymWrNEiI&usqp=CAU",
//     "price" : 400000,
//     "type" : " Florist ",
//   "location " : "Mumbai",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Flowers for You    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Flowers for You ",
//     "img" : "https://cdn0.hitched.co.uk/vendor/5623/3_2/960/JPG/florist-blooming-gre-20190516120844602.jpeg",
//     "price" : 390000,
//     "type" : " Florist ",
//   "location " : "pune",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Mona Lisa     ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Mona Lisa  ",
//     "img" : "https://images.squarespace-cdn.com/content/v1/583d4bc76a49631ee366cf77/1548752515454-1I1CSW9Y5UY570VF5PAH/beach-wedding-flowers-auckland.jpg?format=2500w",
//     "price" : 390000,
//     "type" : " Florist ",
//   "location " : "Thane",
//     "__v" : 0
//   },
  
//   {
        
//     "username" : "axilldchuna2345@gmail.com",
//     "userDisplayName" : "Sims Flower Stop    ",
//     "description" : "The bouquet dance or anniversary dance is an alternative to throwing the bouquet at your wedding reception. The idea is this: Your DJ or emcee invites all married couples onto the dance floor. After a few minutes of dancing, the DJ asks all couples who have been married for five years or less to leave the dance floor. After another few minutes, he asks all those couples married for ten years or less to leave the dance floor, and so on. Eventually, you are left with the longest-married couple that then receives the bouquet. If you're not into tossing your bouquet, this can be a nice way to involve guests of all ages in a feel-good event. ",
//     "name" : "Sims Flower Stop  ",
//     "img" : "https://images.unsplash.com/photo-1521520368710-3ab197656d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
//     "price" : 390000,
//     "type" : " Florist ",
//   "location " : "pune",
//     "__v" : 0
//   },
  
  
  


//   ]).then(function(){
//     console.log("Data inserted")  // Success
//   }).catch(function(error){
//     console.log(error)      // Failure
//   });
module.exports= Vendor

