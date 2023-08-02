const express = require("express");
const app =  express();
const cors = require("cors")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 6060
//database connection 
const connectDB = require("./db")
connectDB()
//middleware
app.use(express.json())
app.use(cors())

//register page routes
app.use("/api/auth", require("./routes/userRouter"));
app.use("/api/openai", require("./routes/openaiRouter"));

//read static file
app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",function(_,res){
res.sendFile(path.join(__dirname,"./client/build"),function(err){
    res.status(500).send(err);
})
})
//listing to the port
app.listen(PORT,()=>{
    console.log("server on !")
});