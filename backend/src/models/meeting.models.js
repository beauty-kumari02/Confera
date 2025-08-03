import mongoose,{Schema} from "mongoose";

const meetingSchema=new Schema({
    user_id:{type:String},
    meetingCode:{ type:String,required:true},
    date:{type:Date,default:Date.now,required:true}
})

const Meeting=mongoose.model("Meetiing",meetingSchema);

export {Meeting};//default mai app ek hi chij export kar sakte ho,aur aise bahut sari chije