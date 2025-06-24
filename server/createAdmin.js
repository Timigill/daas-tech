const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const existing = await User.findOne({ email: "admin@example.com" });
  if (existing) {
    console.log("Admin already exists");
    return process.exit();
  }

  const admin = new User({
    username: "AdminUser",
    email: "admin@example.com",
    password: "admin123", // Will be hashed
    role: "admin"
  });

  await admin.save();
  console.log("✅ Admin user created!");
  process.exit();
}).catch(err => {
  console.error("MongoDB error:", err);
});
