const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  name: { type: String, required: true },
  profilePicture: {
    type: String,
    default:
      "https://res.cloudinary.com/direuudpy/image/upload/v1596033402/insta/profile_picture_default_tzqyoh.jpg",
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  subscriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  notifications: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      event: {
        type: String,
        enum: ["liked", "commented"],
      },
      image: {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
