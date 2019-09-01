const mongoose = require('mongoose')
const Schema = mongoose.Schema

let image =new Schema({
    url:{type:String,required:true, max:500},
    user:{type:String, required:true},
    description:{type:String}
},
{autoCreate:true});

module.exports= mongoose.model('Image',image);