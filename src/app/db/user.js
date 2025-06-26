import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: String,
}, { collection: "users" }); // <-- ensure this line is present

const User = mongoose.models.User || mongoose.model("User", userSchema);

const users = await User.find({});
console.log("All users:", users);

export default User;