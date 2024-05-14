import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  description: { type: String, required: true },
  uuid: { type: String, required: true },
  id: { type: String },
  employee: [{
    employeeId:{ type: String },
    name:{ type: String },
    email:{ type: String },
    contact:{ type: String },
    dateOfJoining: { type: String },
    exp: { type: Number },
    department: { type: Number, default: ''},
    role: { type: String, default: ''},
  }]
});

export default mongoose.model("company", companySchema);