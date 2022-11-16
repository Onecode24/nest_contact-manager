import mongoose, { now } from "mongoose";

// Declare the Schema of the Mongo model
export  const  userInfoSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type: String,
        required:true,
    },
    birthday:{
        type: Date,
        require: true,
    },
    adress: {
        type: String,
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    mail:{
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['Masculin','Feminin'],
        require: true
    },
    picture:{
        data: Buffer,
        contentType: String
    },
    citation: {
        type: String,
    },

});

//Export the model
// module.exports = mongoose.model('User', userInfoSchema);

// declare interface IUserInfo for User model
export interface IUserInfo extends mongoose.Document {
    firstname: string;
    lastname: string;
    birthday: Date;
    adress: string;
    phone: string;
    mail: string;
    gender: string;
    picture: string;
    citation: string;
}