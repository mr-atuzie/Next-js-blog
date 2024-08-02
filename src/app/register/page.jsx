"use client";

import Cookies from "js-cookie";
import { createUser } from "@/services/user";
import Link from "next/link";

const RegisterPage = () => {
  const handleRegister = async () => {
    try {
      const formData = {
        lastname: "Atuzie",
        firstname: "Victoria",
        username: "Nyebuchi",
        email: "vicky@gmail.com",
        password: "12345678",
      };

      const res = await createUser(formData);
      const data = JSON.parse(res) || [];

      console.log(res);
      console.log(data);

      Cookies.set("user_token", data.token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      if (res?.error) {
        console.log(res?.error);
      }

      if (res?.message) {
        console.log(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <form className=" flex gap-4 flex-col lg:w-[45%] my-20  mx-auto bg-white rounded-md shadow-md p-4 lg:p-8 ">
        <div>
          <h1 className="font-bold text-2xl">Create account</h1>
          <p className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <label className="  text-sm" htmlFor="name">
                Name
              </label>
              <input
                className=" border rounded-md p-2 w-full placeholder:text-sm placeholder:font-normal bg-gray-50"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                className=" border rounded-md p-2 w-full placeholder:text-sm placeholder:font-normal bg-gray-50"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <p className=" text-xs mt-1 text-gray-500">
            This will be your display name
          </p>
        </div>

        <div>
          <label className=" text-sm" htmlFor="email">
            Email
          </label>
          <input
            className=" border rounded-md p-2 w-full placeholder:text-sm placeholder:font-normal bg-gray-50"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
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

        <button
          className="bg-black disabled:opacity-60 text-white rounded-md p-2.5 mt-6"
          onClick={handleRegister}
        >
          Register
        </button>
        <Link className=" text-center" href={"/login"}>
          {" "}
          <p className=" text-xs mt-1 text-gray-500">
            Already have an account?{" "}
            <span className=" text-black font-semibold">Login</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
