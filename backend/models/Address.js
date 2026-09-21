import mongoose from'mongoose';

export const addressSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    fullName:String,
    phone:Number,
    addressLine:String,
    city:String,
    state:String,
    pincode:Number,
},{
    timestamps:true
});

export default mongoose.model("Address",addressSchema);