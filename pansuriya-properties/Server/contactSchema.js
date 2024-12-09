const mongoose = require("mongoose");

const schema =mongoose.Schema(
    {
        name :String,
        phone : Number,
        email : String,
        message: String
    }
); 
module.exports=mongoose.model('Contact',schema)