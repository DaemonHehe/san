import express from "express";
import dbConnect from "./config/dbConnect";
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
import authRouter from "./routes/authRoute";
import productRouter from "./routes/productRoute";
import blogRouter from "./routes/blogRoute";
import { json, urlencoded } from "body-parser";
import { notFound, errorHandler } from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dbConnect();

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
