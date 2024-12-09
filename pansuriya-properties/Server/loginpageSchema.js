const mongoose = require("mongoose");

const schema =mongoose.Schema(
    {
        name : String,
        email : String,
        password : String,
        role : String
    }
); 
module.exports=mongoose.model('Login',schema)