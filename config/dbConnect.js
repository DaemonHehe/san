const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const connect = mongoose.connect(process.env.mongoDB_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Error");
  }
};

module.exports = dbConnect;
