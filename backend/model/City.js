const mongoose = require('mongoose');
const citySchema =new mongoose.Schema({
    name:{type:String,required:true},
    thumbnail:{type:String},
    visitCount:{type:Number,default:0}
});
module.exports = mongoose.model('city',citySchema);