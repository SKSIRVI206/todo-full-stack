import mongoose from "mongoose";

const connectToDb = async()=>{
    try {
        const dbConnection = await mongoose.connect(process.env.DB_URL);
        console.log('Connected To DB')
    } catch (error) {
        console.log('Not Connected To DB', error);
        process.exit(1)
    }
}

export default connectToDb;