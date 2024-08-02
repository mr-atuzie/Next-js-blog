import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import Cookie from "js-cookie";

export const createUser = async () => {
  const { firstname, lastname, username, password, email } = formData;
  try {
    await connectDB();

    if (!firstname || !lastname || !username || !email || !password) {
      return { error: "Please fill up all fields." };
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { error: "User already exists." };
    }

    // Create new user
    const user = new User({ lastname, firstname, username, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    Cookie.set("token", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });

    return JSON.stringify({ user, token });
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
