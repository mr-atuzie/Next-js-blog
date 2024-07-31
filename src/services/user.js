import { User } from "@/models/user";

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
