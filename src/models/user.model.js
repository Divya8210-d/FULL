import { model, Schema } from "mongoose";
import mongoose  from "mongoose";

const UserSchema = new Schema({
username:{
    type:String,
  required:true,
  unique:true,
  lowercase:true,
  trim:true,
  index:true

},
email:{
    type:String,
  required:true,
  unique:true,
  lowercase:true,
  trim:true,


},
fullname:{
    type:String,
  lowercase:true,
  trim:true,
  index:true

},
avatar:{
    type:String,
    required:true
}

})

export const  User = mongoose.model("User",UserSchema)