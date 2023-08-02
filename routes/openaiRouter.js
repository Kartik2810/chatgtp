const express= require("express");
const rauter = express.Router();
const  {summaryController,
        paragraphContoller,
        chatBoxController,
        jsConverterController,
        sifiimageController,
        } = require("../controller/aiController")

rauter.post("/summary",summaryController)
rauter.post("/paragraph",paragraphContoller)
rauter.post("/chatbox",chatBoxController)
rauter.post("/jsconverter",jsConverterController)
rauter.post("/sifiimage",sifiimageController)



module.exports = rauter