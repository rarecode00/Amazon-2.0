const mongoose = require('mongoose')
const mongooseURI = 'mongodb+srv://rarecode_00:xUERqb7QwrH2LVH8@clusterforamazon.al90gih.mongodb.net/AmazonClone?retryWrites=true&w=majority';
const connectToMongo = () =>{
   mongoose.connect(mongooseURI).then(() =>{
      console.log("Successfully Connected to Database");
   }).catch((err) =>{
      console.log("Error Occured While connecting to Database" , err);
   })
}

module.exports = connectToMongo;