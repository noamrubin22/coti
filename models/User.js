const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    password: String,
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/justgerrit/image/upload/v1575981209/profilepictures/gerrit.jpg",
    },
    nativeLanguage: [String],
    foreignLanguage: {
      lan: String,
      level: String,
    },
    age: Number,
    country: String,
    interests: [String],
    bio: String,
    availability: String,
    email: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
