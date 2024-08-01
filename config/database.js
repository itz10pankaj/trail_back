const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    //process.env.DB_URI
    .connect("mongodb+srv://pgarg9355:88IsaYSXZGGtWdE3@cluster0.kgiclwb.mongodb.net/E_Commerse")
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
};

module.exports = connectDatabase;
