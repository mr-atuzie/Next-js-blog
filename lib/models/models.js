const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: [true, "Please add a firstname."] },
    lastname: { type: String, required: [true, "Please add a lastname."] },
    username: {
      type: String,
      required: [true, "Please add a username."],
      unique: true,
    },
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
    avatar: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    coverPic: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
    },
    description: {
      type: String,
    },
    city: {
      type: String,
    },
    school: {
      type: String,
    },
    work: {
      type: String,
    },
    avatar: {
      type: String,
    },
    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      trim: true,
    },
    photo: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  },
  { timestamps: true }
);

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);

const followerSchema = new mongoose.Schema(
  {
    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    followers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);
export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
