import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  complaint_description: {
    type: String,
    required: true,
  },
  complaint_title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

});

export default mongoose.model("Complaint", ComplaintSchema);
