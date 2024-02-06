"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      className={` min-w-[100px] p-2 rounded-full text-center ${
        pathName === item.path && " bg-white  text-[#0d0c22]"
      }`}
      href={item.path}
      key={item.title}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
