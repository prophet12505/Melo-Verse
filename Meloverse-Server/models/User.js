const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {type:String,default:''},
    email: {type:String,default:''},
    password: {type:String,default:''}
})


module.exports=mongoose.model('User',User);