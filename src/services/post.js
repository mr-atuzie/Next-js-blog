"use server";
import { connectDB } from "@/lib/db";
import { Comment } from "@/models/comment";
import { Like } from "@/models/like";
import { Post } from "@/models/post";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

const getErrorMsg = (error) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const createPost = async () => {
  const { desc, userId } = formData;
  try {
    if (!desc) {
      return {
        error: "Please fill up all the fields.",
      };
    }

    await connectDB();

    const newPost = await Post.create({
      desc,
      user: userId,
    });

    const user = await User.findById(userId);
    user.posts.push(newPost._id);
    await user.save();

    revalidatePath("/");

    return {
      message: "Post created successfully",
    };
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};

export const getPosts = async () => {
  try {
    await connectDB();

    const posts = await Post.find({});

    revalidatePath("/");

    return posts;
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};

export const likePost = async (formData) => {
  try {
    await connectDB();

    const { postId, userId } = formData;
    const newLike = new Like({ user: userId, post: postId });
    await newLike.save();

    const post = await Post.findById(postId);
    if (!post) {
      return {
        error: "Post does not exist.",
      };
    }
    post.likes.push(newLike._id);
    await post.save();

    const user = await User.findById(userId);
    user.likes.push(newLike._id);
    await user.save();
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};

export const comment = async (formData) => {
  try {
    await connectDB();

    const { content, postId, userId } = req.body;
    const newComment = new Comment({ content, post: postId, user: userId });
    await newComment.save();

    const post = await Post.findById(postId);
    post.comments.push(newComment._id);
    await post.save();

    const user = await User.findById(userId);
    user.comments.push(newComment._id);
    await user.save();
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};
