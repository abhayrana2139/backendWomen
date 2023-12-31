import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";

import cors from "cors";
import Complaintrouter from "./routes/Complaint.js";
import UploadRouter from "./routes/upload.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.use("/api/upload", UploadRouter);
app.use('/api/complaint', Complaintrouter);

mongoose
  .connect(
    "mongodb+srv://Abhay:JGUA87LLpflf3R9y@cluster0.ttsx8qh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
