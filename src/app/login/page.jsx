import Link from "next/link";
import { GiSeagull } from "react-icons/gi";

const Login = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <form className=" flex gap-6 flex-col lg:w-[40%] my-20  mx-auto bg-white rounded-md shadow-md p-4 lg:p-8 ">
        <div className="flex items-center  gap-2">
          <div className=" bg-gray-50 p-2 rounded-md">
            <GiSeagull size={20} />
          </div>

          <h1 className=" font-semibold">Seagull</h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Login</h1>
          <p className="text-sm text-gray-500">
            Join our community and share event,we got you
          </p>
        </div>

        <div>
          <label className=" text-sm" htmlFor="email">
            Enter your email or usermane
          </label>
          <input
            className=" border rounded-md p-2 w-full placeholder:text-sm placeholder:font-normal bg-gray-50"
            type="email"
            id="email"
            name="email"
            placeholder="email, username"
          />
        </div>

        <div>
          <label className="  text-sm" htmlFor="password">
            Password
          </label>
          <input
            className=" border rounded-md p-2 w-full placeholder:text-sm placeholder:font-normal bg-gray-50"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="bg-black disabled:opacity-60 text-white rounded-md p-2.5 mt-6">
          Login
        </button>
        <Link className=" text-center" href={"/register"}>
          <p className=" text-xs mt-1 text-gray-500">
            Don&apos;t have an account?{" "}
            <span className=" text-black font-semibold">Register</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
