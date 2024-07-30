import { NextResponse } from "next/server";
import { connectDB } from "../config/db";
import { Post } from "../models/models";

export const getPost = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
    // return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const createPost = async (request) => {
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
