const bcrypt = require('bcrypt');
const User = require('../models/user')
var jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    try{

        const input = req.body;
        if(!input.email || !input.password){
            res.send('Incomplete Credentials')
            return
        }
        const hashedPassword = await bcrypt.hash(input.password, 10) 
        var object = {
            email: input.email,
            password: hashedPassword
        }

        const userObj = await User.findOne({email: input.email}) 
        if(userObj){
            res.send('User Already Exists')
            return
        }
        
        
        const data = await User.create(object)

        var token = await jwt.sign({ data: 'jiceo'}, 'privateKey');

        res.send({
            success: true,
            data,
            token
        })

    }catch(err){
            res.send(err)
        }




}


const loginUser = async(req, res) => {
    try{


    }catch(err){
        res.send(err)
    }


}

const fetchUser = async (req, res) => {

    res.send('Userr handler heree')
}



module.exports = {
    fetchUser,
    registerUser
}