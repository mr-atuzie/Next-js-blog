import mongoose from "mongoose";

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
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
