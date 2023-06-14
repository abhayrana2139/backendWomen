import Complaint from "../model/Complaint.js";


export const getAllComplaints = async (req, res, next) => {
    let complaints;
    try {
      complaints = await Complaint.find();
    } catch (err) {
      console.log(err);
    }
    if (!complaints) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ complaints });
  };

  export const addComplaint = async (req, res, next) => {
    const { name, email, complaint_title , complaint_description } = req.body;
 
  
   
  
    const complaint = new Complaint({
      name,
      email,
      complaint_title , 
      complaint_description
    });
  
    try {
      await complaint.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ complaint });
  };
  