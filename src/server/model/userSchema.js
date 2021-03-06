const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
   
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
    cpassword: {
        type: String,
        required:true,
    },
    token:{
                type: String,
            },
})

const User = mongoose.model('USER', userSchema);

module.exports = User;