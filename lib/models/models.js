const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a display name."] },
    username: { type: String, required: [true, "Please add a username."] },
    email: {
      type: String,
      required: [true, "Please add a email."],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid emaial",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
    },
    photo: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    coverPhoto: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "+234",
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a display name."] },
    desc: { type: String, required: [true, "Please add a username."] },
    photo: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
