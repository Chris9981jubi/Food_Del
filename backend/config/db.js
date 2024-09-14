import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://christypjubi:Password@cluster0.pmtnm.mongodb.net/food-del")
    .then(()=>
        console.log("Successfully connected to Database")
    )

}