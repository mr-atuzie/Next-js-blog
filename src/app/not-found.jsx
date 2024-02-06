import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry the page you are looking for does not exist.</p>
      <Link className=" text-blue-600 text-sm" href={"/"}>
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
