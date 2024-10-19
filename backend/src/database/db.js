import mongoose from 'mongoose';
import { DATABSE_NAME } from '../constants.js';

async function connectDB() {
    try {
        console.log("test");
        const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_STRING}/${DATABSE_NAME}`);
        console.log("Connected to the database: ", connectionInstance.connection.host);
    } catch (error) {
        console.error("Error connecting to the database: ", error);
        process.exit(1);
    }
}

export default connectDB;
