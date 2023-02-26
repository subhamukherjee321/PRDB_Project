const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    authId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    token : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now(),
        expires : 36000 // 1 Hour
    }
},{versionKey : false});

const tokenModel = mongoose.model("token", tokenSchema);
module.exports = {
    tokenModel
}