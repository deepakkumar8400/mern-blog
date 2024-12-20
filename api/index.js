import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.log('Database Connection Failed');
});

const app=express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

app.use('/api/user',userRouter);
app.use('/api/auth',userRouter);