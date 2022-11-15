import mongoose from "mongoose";
import validator from "validator";



let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

export default mongoose.model('users',userSchema)