import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  const req = [1, 2, 3, 4];
  return (
    <div className="p-4  shadow-md bg-white rounded-lg flex flex-col gap-4">
      <div className=" flex justify-between items-center">
        <span className=" tracking-wide font-medium">Who to follow</span>

        <Link className=" text-xs text-blue-500" href={"/"}>
          See all
        </Link>
      </div>

      {req.map((r) => {
        return (
          <div key={r} className=" flex justify-between items-center  text-sm">
            <div className=" flex items-center gap-4">
              <div className=" relative w-10 h-10">
                <Image
                  src={
                    "https://images.pexels.com/photos/14116149/pexels-photo-14116149.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  alt=""
                  fill
                  className=" object-cover  rounded-full"
                />
              </div>

              <p className=" font-medium">Micheal Faraday</p>
            </div>

            <button className=" text-sm  rounded-full px-4 py-2 bg-gray-100 ">
              follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FriendRequests;
