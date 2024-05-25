import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_DB_URI);
        console.log("Connection To MongoDB");
    } catch (error) {
        console.log("Error Connecting To MongoDB", error.message);
    }
};

export default connectToMongoDB;