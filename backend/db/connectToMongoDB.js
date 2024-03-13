import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connoectd to MongoDB");
    } catch (error) {
        console.log("Erro conncting to MongoDB", error);
    }
}

export default connectToMongoDB;