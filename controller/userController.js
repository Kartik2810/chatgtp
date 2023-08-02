const User = require("../models/User.js")

const registerController=async(req,res)=>{
    try {
        const user = new User(req.body)
        await user.save()
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
    

}

const loginController=async(req,res)=>{
    try {
        const {email,password} = req.body
        const user =await User.findOne({email,password});
        if(!user){
            res.status(404).send("user not found")
        }
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports ={registerController,loginController }