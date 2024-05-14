import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: String },
  companies: [{
    type: String,
    ref: 'Company'
  }]
});

export default mongoose.model("user", userSchema);
