const User = require('../models/user')
console.log(User)



const fetchUser = async (req, res) => {

    res.send('Userr handler heree')
}



module.exports = {
    fetchUser
}