import mongoose from "mongoose";

export default async function connectionDb(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully")
    }catch(e){
        console.log(e)
    }
}