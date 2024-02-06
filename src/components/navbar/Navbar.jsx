import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  return (
    <header className="  h-[100px] items-center flex justify-between">
      <h2 className=" text-3xl font font-bold">Rex</h2>

      <Links />
    </header>
  );
};

export default Navbar;
