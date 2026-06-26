
const  mongoose = require("mongoose");
console.log("connect to");


// const schema = require("mongoose")
// mongoose.connect("mongodb+srv://amittt11:amittt11@cluster0.fpu30u7.mongodb.net/coursera-app")
// const schema = mongoose.schema
const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    email : {type : String,
        unique : true},
    password : String,
    firstname: String,
    lastname : String,
});

const adminSchema = new mongoose.Schema({
 email : {type : String,unique : true},
    password : String,
    firstname: String,
    lastname : String,
});
const courseSchema = new mongoose.Schema({
title: String,
description : String,
price :Number,
imageUrl : String,
creatorId : objectId,
});
const purchaseSchema = new mongoose.Schema({
 userId : objectId,
 courseId : objectId,
});

const usermodel = mongoose.model("user",userSchema);
const adminmodel = mongoose.model("admin",adminSchema);
const coursemodel = mongoose.model("course",courseSchema);
const purchasemodel = mongoose.model("purchase",purchaseSchema);

// Temporary test
// async function testDB() {
//     const user = await usermodel.create({
//         email: "amit@gmail.com",
//         password: "123456",
//         firstname: "Amit",
//         lastname: "Awasthi"
//     });

//     console.log(user);
// }

// testDB();

module.exports ={
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}
