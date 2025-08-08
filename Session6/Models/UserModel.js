const {Schema, default: mongoose} = require("mongoose")


const userSchema = new Schema({
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name must be less than 100 characters"],
    },
    age: {
      type: Number,
      min: [18, "Age must be a positive number"],
      max: [150, "Age must be less than or equal to 150"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    isActive: {
      type: Boolean,
      default: true,
    }
});

module.exports = mongoose.model("user", userSchema);