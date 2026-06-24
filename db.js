const { default: mongoose } = require("mongoose")
// const schema = require("mongoose")
mongoose.connect("")
const schema = mongoose.schema
const objectId = mongoose.Types.ObjectId;

const userSchema = Schema({
    email : {Type : String,unique : true},
    password : String,
    firstname: String,
    lastname : String,
});

const adminSchema = schema({
 email : {Type : String,unique : true},
    password : String,
    firstname: String,
    lastname : String,
});
const courseSchema = schema({
title: String,
description : String,
price :Number,
imageUrl : String,
creatorId : objectId,
});
const purchaseSchema = schema({
 userId : objectId,
 courseId : objectId,
});

const usermodel = mongoose.model("user",userSchema);
const adminmodel = mongoose.model("admin",adminSchema);
const coursemodel = mongoose.model("course",courseSchema);
const purchasemodel = mongoose.model("purchase",purchaseSchema);

module.exports ={
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}