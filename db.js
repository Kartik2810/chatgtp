const dotenv = require("dotenv");
dotenv.config()
const mongoose = require("mongoose");
const URI = process.env.MONGOURI 

const connectDB=async()=>{
    await mongoose.connect(URI,{useNewUrlParser:true})
    .then(()=>{console.log("mongoDB connection Successfull...")})
    .catch((err)=>{console.log(err)})
}
module.exports = connectDB