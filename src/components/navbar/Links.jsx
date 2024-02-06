"use client";
import { useState } from "react";
import NavLink from "../navlink/navLink";

const Links = () => {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const [menu, setMenu] = useState(false);

  const session = true;
  const isAdmin = true;
  return (
    <div className=" ">
      <div className="hidden lg:flex items-center gap-1">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className=" min-w-[100px] rounded-md text-center font-semibold bg-white p-2 text-[#0d0c22]">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button
        className=" lg:hidden  cursor-pointer "
        onClick={() => setMenu((prev) => !prev)}
      >
        Menu
      </button>

      {menu && (
        <div className=" lg:hidden absolute top-[100PX] right-0 w-[70%] h-screen z-40 flex flex-col items-center justify-center ">
          {links.map((link, index) => (
            <NavLink item={link} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
