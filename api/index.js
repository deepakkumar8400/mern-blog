import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Deep3713:Deepakkk%233713@mern-estate.6sylb.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate')
const app=express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})