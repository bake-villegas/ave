import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export async function connectDB(){
    try{
        const db = await mongoose.connect(process.env.MANGO)
        console.log('Conectado a ',db.connection.name)
    } catch(error){
        console.error(error)
    }
}