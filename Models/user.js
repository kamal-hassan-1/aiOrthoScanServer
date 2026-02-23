import mongoose from "mongoose";

const {schema}=mongoose;

const userSchema = new mongoose.Schema({
    fullName: {type:String , required:true},
    age: {type:String , required:true},
    gender: {type:String , required:true},
    email: {type:String , required:true},
    password: {type:String , required:true},
    refreshToken: {type:String}
});

export default mongoose.model("User",userSchema);