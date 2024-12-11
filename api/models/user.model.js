import mongoose from 'mongoose';    

const userSchema=new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        uniqueValues:true,
    },
    password:{
        type:string,
        required:true,
    },
},{
    timestamp:true,
});

const User=mongoose.model('User',UserSchema);

export default User;