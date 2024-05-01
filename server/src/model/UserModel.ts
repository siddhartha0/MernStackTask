import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
  connectionMethod: { type: String },
  message: { type: String },
});

const userModal = mongoose.model("user", userSchema);

export default userModal;
