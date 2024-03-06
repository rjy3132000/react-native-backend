const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://react_native_crud:react_native_crud@cluster0.ajk56hs.mongodb.net/");
        console.log(`MongoDB Connected:- ${conn.connection.host}`)
    }
    catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit();
    }
}

module.exports = connectDB;