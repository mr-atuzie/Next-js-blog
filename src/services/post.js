"use server";
import { connectDB } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createPost = async () => {
  const { desc } = formData;
  try {
    if (!desc) {
      return {
        error: "Please fill up all the fields.",
      };
    }

    await connectDB();

    await Invoice.create({
      desc,
    });

    revalidatePath("/");

    return {
      message: "Post created successfully",
    };
  } catch (error) {}
};
