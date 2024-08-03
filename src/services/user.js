"use server";

import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";

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

export const createUser = async (formData) => {
  const { name, username, password, email } = formData;
  await connectDB();

  try {
    if (!name || !username || !email || !password) {
      return { error: "Please fill up all fields." };
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { error: "User already exists." };
    }

    // Create new user
    const user = new User({ name, username, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return JSON.stringify({
      token,
    });
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};

export const loginUser = async (formData) => {
  const { username, password } = formData;
  await connectDB();

  try {
    if (!username || !password) {
      return { error: "Please fill up all fields." };
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return { error: "User already exists." };
    }

    const confirmPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!confirmPassword) {
      return { error: "Inavalid credential, check username or password." };
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return JSON.stringify({
      token,
    });
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};

export const uploadPic = async (formData) => {
  const { token, profilePic } = formData;
  await connectDB();

  try {
    if (!token) {
      return { error: "Not authorized, please login" };
    }

    //Verify token
    const userData = jwt.verify(token, process.env.JWT_SECRET);

    if (!userData) {
      return { error: "Invalid or expired token" };
    }

    const updatedUser = await User.findByIdAndUpdate(
      userData.id,
      { avatar: profilePic },
      { new: true }
    );

    // if (!name || !username || !email || !password) {
    //   return { error: "Please fill up all fields." };
    // }

    // Check if user already exists
    // const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   return { error: "User already exists." };
    // }

    // Create new user
    // const user = new User({ name, username, email, password });
    // await user.save();

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    return JSON.stringify({
      updatedUser,
    });
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};

export const searchForUser = async (params) => {
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 20;
  const skip = (page - 1) * limit;

  const query = {
    ...(params.search && {
      $or: [
        { lastname: { $regex: params.search, $option: "i" } },
        { firstname: { $regex: params.search, $option: "i" } },
        { username: { $regex: params.search, $option: "i" } },
      ],
    }),
  };

  try {
    await connectDB();

    const searched = await User.find(query);

    return JSON.stringify({ searched });
  } catch (error) {
    console.log(getErrorMsg(error));
    console.log(error);

    return {
      error: getErrorMsg(error),
    };
  }
};
