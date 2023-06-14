import express from "express";
import { addComplaint, getAllComplaints } from "../controllers/complaint.js";

const Complaintrouter = express.Router();

Complaintrouter.get("/", getAllComplaints);
Complaintrouter.post("/addComplaint", addComplaint);

export default Complaintrouter;
