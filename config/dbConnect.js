import { connect as _connect } from "mongoose";

const dbConnect = () => {
  try {
    const connect = _connect(process.env.mongoDB_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Error");
  }
};

export default dbConnect;
